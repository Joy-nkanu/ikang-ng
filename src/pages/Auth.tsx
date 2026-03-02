import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Fuel, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  // Email auth state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // Phone auth state
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (authMode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast({
          title: "Check your email",
          description: "We sent you a verification link to confirm your account.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/admin");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtp = async () => {
    if (!phoneNumber) return;
    setIsLoading(true);
    try {
      const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+234${phoneNumber.replace(/^0/, "")}`;
      const { error } = await supabase.auth.signInWithOtp({ phone: formattedPhone });
      if (error) throw error;
      setOtpSent(true);
      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to ${formattedPhone}${isWhatsApp ? " via WhatsApp" : ""}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    try {
      const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+234${phoneNumber.replace(/^0/, "")}`;
      const { error } = await supabase.auth.verifyOtp({
        phone: formattedPhone,
        token: otp,
        type: "sms",
      });
      if (error) throw error;
      navigate("/admin");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
              <Fuel className="w-6 h-6 text-primary-foreground" />
            </div>
          </a>
          <h1 className="text-3xl font-bold text-primary-foreground">
            Welcome to <span className="text-gradient">Ikang</span>
          </h1>
          <p className="text-primary-foreground/60 mt-2">
            Skip the queue. Get fuel delivered.
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-card rounded-2xl p-6 shadow-card-hover border border-border">
          {/* Sign In / Sign Up Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setAuthMode("signin")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                authMode === "signin"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                authMode === "signup"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Login Method Tabs */}
          <Tabs value={loginMethod} onValueChange={(v) => { setLoginMethod(v as "email" | "phone"); setOtpSent(false); }}>
            <TabsList className="w-full mb-4">
              <TabsTrigger value="email" className="flex-1 gap-2">
                <Mail className="w-4 h-4" /> Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex-1 gap-2">
                <Phone className="w-4 h-4" /> Phone
              </TabsTrigger>
            </TabsList>

            {/* Email Auth */}
            <TabsContent value="email">
              <form onSubmit={handleEmailAuth} className="space-y-4">
                {authMode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Chidi Okonkwo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Please wait..." : authMode === "signin" ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </TabsContent>

            {/* Phone Auth */}
            <TabsContent value="phone">
              <div className="space-y-4">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 bg-muted rounded-lg text-sm font-medium text-muted-foreground border border-input">
                          +234
                        </div>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="8012345678"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {/* WhatsApp toggle */}
                    <button
                      type="button"
                      onClick={() => setIsWhatsApp(!isWhatsApp)}
                      className={`flex items-center gap-3 w-full p-3 rounded-lg border transition-all ${
                        isWhatsApp
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <div className="text-left">
                        <p className="text-sm font-medium">Use WhatsApp Number</p>
                        <p className="text-xs opacity-70">Receive OTP via WhatsApp</p>
                      </div>
                    </button>

                    <Button onClick={handleSendOtp} className="w-full" size="lg" disabled={isLoading || !phoneNumber}>
                      {isLoading ? "Sending..." : "Send OTP"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter Verification Code</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="123456"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="text-center text-2xl tracking-widest"
                      />
                      <p className="text-xs text-muted-foreground text-center">
                        Code sent to +234{phoneNumber.replace(/^0/, "")}
                      </p>
                    </div>
                    <Button onClick={handleVerifyOtp} className="w-full" size="lg" disabled={isLoading || otp.length < 6}>
                      {isLoading ? "Verifying..." : "Verify & Sign In"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <button
                      onClick={() => { setOtpSent(false); setOtp(""); }}
                      className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ← Back to phone number
                    </button>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <p className="text-center text-primary-foreground/40 text-xs mt-6">
          By signing in, you agree to Ikang's Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
