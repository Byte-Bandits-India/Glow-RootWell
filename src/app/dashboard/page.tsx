"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { SERVER_PLANS } from "@/lib/plans";
import { initiateCheckout } from "@/lib/checkout";
import {
  ShieldCheck,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Receipt,
  LogOut,
  Calendar,
  Layers,
  Loader2,
  Check,
  CreditCard,
  FileCheck,
  AlertTriangle,
  X,
} from "lucide-react";

interface OrderItem {
  id: string;
  planId: string;
  amount: number;
  currency: string;
  status: string;
  receipt: string | null;
  createdAt: string;
}

export default function DashboardPage() {
  const { user, loading, refreshUser, logout, deleteAccount } = useAuth();
  const router = useRouter();

  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [upgrading, setUpgrading] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/dashboard");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    fetch("/api/payments/orders")
      .then((res) => res.json())
      .then((data) => {
        // Exclude uncompleted/created draft sessions and keep only paid orders
        const rawOrders: OrderItem[] = data.orders || [];
        const paidOrders = rawOrders.filter((ord) => ord.status === "paid");
        setOrders(paidOrders);
      })
      .catch((err) => console.error("Failed to load orders:", err))
      .finally(() => setOrdersLoading(false));
  }, [user]);

  // Filter out any non-paid orders client-side and limit to the last 6 history records
  const completedOrders = useMemo(
    () => orders.filter((ord) => ord.status === "paid").slice(0, 6),
    [orders]
  );

  const handleUpgrade = async (planId: "starter" | "pro" | "membership") => {
    setUpgrading(planId);
    await initiateCheckout({
      planId,
      onSuccess: async () => {
        setUpgrading(null);
        await refreshUser();
        // Refresh orders list with only completed paid transactions
        const res = await fetch("/api/payments/orders");
        const data = await res.json();
        const rawOrders: OrderItem[] = data.orders || [];
        setOrders(rawOrders.filter((ord) => ord.status === "paid"));
      },
      onError: (msg) => {
        setUpgrading(null);
        alert(msg);
      },
      onCancel: () => {
        setUpgrading(null);
      },
    });
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);
    try {
      const success = await deleteAccount();
      if (!success) {
        alert("Failed to delete account. Please try again or contact support.");
        setDeleting(false);
      }
    } catch (err) {
      console.error("Failed to delete account:", err);
      setDeleting(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#0B2C13]" />
          <p className="text-sm font-medium text-gray-600">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  const activePlanId = user.plan || "free";
  const planDetails =
    activePlanId !== "free"
      ? SERVER_PLANS[activePlanId as keyof typeof SERVER_PLANS]
      : null;

  // Plan-specific status label and badge text
  const planBadgeText =
    activePlanId === "membership"
      ? "Active • Monthly Access"
      : activePlanId === "pro" || activePlanId === "starter"
        ? "Active • Lifetime Access"
        : "Free Starter Tier";

  return (
    <div className="min-h-screen bg-[var(--color-background)] py-6 sm:py-12">
      <Container>
        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-7">
          {/* 1. Header Profile Banner */}
          <div className="bg-gradient-to-r from-[#07240E] via-[#0B2C13] to-[#0D3817] text-white rounded-2xl sm:rounded-[22px] p-4 sm:p-5 lg:p-6 shadow-md relative overflow-hidden border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              {/* User Identity Section */}
              <div className="flex items-center gap-3 sm:gap-4.5 min-w-0">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-12 h-12 sm:w-15 sm:h-15 rounded-full object-cover border border-emerald-400/30 shadow-xs shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-white text-black flex items-center justify-center font-serif text-xl sm:text-3xl font-semibold shrink-0 shadow-xs select-none">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h1 className="font-heading text-base sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug truncate">
                    {user.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-300/80 font-normal truncate mt-0.5">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Mobile Actions & Status Bar (< sm) */}
              <div className="flex sm:hidden items-center justify-between pt-3 border-t border-white/10 gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0F4722] text-[#22C55E] border border-[#22C55E]/30 shadow-xs">
                  {activePlanId === "membership"
                    ? "PRO MEMBER"
                    : activePlanId === "pro"
                      ? "PRO VAULT"
                      : activePlanId === "starter"
                        ? "STARTER"
                        : "FREE TIER"}
                </span>

                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="px-2.5 py-1 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-[11px] font-medium cursor-pointer transition-all inline-flex items-center gap-1.5 active:scale-95 shadow-xs"
                >
                  <LogOut className="w-3 h-3 text-red-300" />
                  <span>Delete Account</span>
                </button>
              </div>

              {/* Desktop Actions & Status Bar (sm+) */}
              <div className="hidden sm:flex flex-col items-end gap-2 sm:gap-2.5 shrink-0">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0F4722] text-[#22C55E] border border-[#22C55E]/30 shadow-xs">
                  {activePlanId === "membership"
                    ? "PRO MEMBER"
                    : activePlanId === "pro"
                      ? "PRO VAULT"
                      : activePlanId === "starter"
                        ? "STARTER"
                        : "FREE TIER"}
                </span>

                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="px-3 py-1.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white/90 text-xs font-medium cursor-pointer transition-all inline-flex items-center gap-1.5 active:scale-95 shadow-xs"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Delete Account</span>
                </button>
              </div>
            </div>
          </div>

          {/* 2. Membership Details & Quick Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Active Membership Details Card */}
            <div className="md:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E7A46]">
                    Current Membership
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#0B2C13] mt-1">
                    {planDetails ? planDetails.name : "Free Starter Tier"}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl leading-relaxed">
                    {planDetails
                      ? planDetails.description
                      : "Explore sample prompts for skin, gut & nutrition. Upgrade anytime to unlock the full 500+ clinical vault."}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-sm">
                  <span>{planBadgeText}</span>
                </div>
              </div>

              {/* Dynamic Feature Checklist based on Current Plan */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    {activePlanId === "pro" || activePlanId === "membership"
                      ? "500+ Complete Clinical Vault"
                      : activePlanId === "starter"
                        ? "25 Starter Skin & Gut Prompts"
                        : "4 Free Sample Prompts"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    {activePlanId === "membership"
                      ? "Monthly Prompt Drops (30+ fresh)"
                      : "Instant Lifetime Access"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Works with ChatGPT, Claude & Gemini</span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    {activePlanId === "membership"
                      ? "Priority WhatsApp & 1-on-1 Coaching"
                      : activePlanId === "pro"
                        ? "Priority WhatsApp Community"
                        : "Community Support"}
                  </span>
                </div>
              </div>

              {/* Upgrade Trigger if on Starter or Free */}
              {activePlanId !== "pro" && activePlanId !== "membership" && (
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8F7F2] p-4 sm:p-5 rounded-2xl border border-gray-200/60">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <h3 className="font-heading font-semibold text-sm text-[#0B2C13] flex items-center justify-center sm:justify-start gap-1.5">
                      {activePlanId === "starter"
                        ? "Upgrade to Full Pro Library (500+ Prompts)"
                        : "Unlock the Complete 500+ Clinical Vault"}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {activePlanId === "starter"
                        ? "Upgrade anytime to unlock all 4 wellness pillars & coach scripts."
                        : "Instant lifetime access starting at ₹199 (Starter) or ₹1,999 (Full Pro)."}
                    </p>
                  </div>
                  <Button
                    variant="accent"
                    size="sm"
                    disabled={upgrading !== null}
                    onClick={() => handleUpgrade("pro")}
                    className="shrink-0 cursor-pointer bg-[#0B2C13] text-white hover:bg-[#1E7A46] font-medium shadow-sm w-full sm:w-auto"
                  >
                    {upgrading === "pro" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                        Processing...
                      </>
                    ) : (
                      "Unlock Pro (₹1,999)"
                    )}
                  </Button>
                </div>
              )}
            </div>

            {/* Quick Launch Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#0B2C13]">
                  Browse by Topic
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Direct shortcuts to curated clinical categories:
                </p>

                <div className="mt-4 space-y-1.5">
                  <Link
                    href="/library?cat=skin"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8F7F2] transition-colors text-xs font-medium text-gray-700 group"
                  >
                    <span>Skin & Barrier Routines</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0B2C13] transition-colors" />
                  </Link>
                  <Link
                    href="/library?cat=gut"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8F7F2] transition-colors text-xs font-medium text-gray-700 group"
                  >
                    <span>Gut Health & Bloating</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0B2C13] transition-colors" />
                  </Link>
                  <Link
                    href="/library?cat=nutrition"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8F7F2] transition-colors text-xs font-medium text-gray-700 group"
                  >
                    <span>Nutrition & Indian Thalis</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0B2C13] transition-colors" />
                  </Link>
                  <Link
                    href="/library?cat=fitness"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8F7F2] transition-colors text-xs font-medium text-gray-700 group"
                  >
                    <span>PCOD Fitness & Strength</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0B2C13] transition-colors" />
                  </Link>
                </div>
              </div>

              <Button
                href="/library"
                variant="primary"
                size="sm"
                fullWidth
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                className="bg-[#0B2C13] hover:bg-[#1E7A46] text-white justify-center shadow-sm"
              >
                View All 500+ Prompts
              </Button>
            </div>
          </div>

          {/* 3. Orders & Billing History Table (Paid receipts only, no payment IDs or created drafts) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#0B2C13] flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#1E7A46]" />
                  Billing & Purchase History
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Last 6 verified invoices and receipts for your active memberships
                </p>
              </div>

              {completedOrders.length > 0 && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                  Last {completedOrders.length} {completedOrders.length === 1 ? "receipt" : "receipts"}
                </span>
              )}
            </div>

            {ordersLoading ? (
              <div className="py-12 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-[#0B2C13]" />
                <span>Loading your verified receipts...</span>
              </div>
            ) : completedOrders.length === 0 ? (
              <div className="py-12 px-4 text-center space-y-3 bg-[#F8F7F2]/80 rounded-2xl border border-dashed border-gray-200">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                  <Receipt className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">
                  No completed purchases yet
                </h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  When you purchase a prompt bundle or membership, your official verified receipts will appear here.
                </p>
                <div className="pt-2">
                  <Button href="/pricing" variant="outline" size="sm">
                    View Membership Plans
                  </Button>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200/70 text-gray-400 uppercase text-[10px] tracking-wider font-semibold">
                      <th className="py-3 px-3 sm:px-4">Date</th>
                      <th className="py-3 px-3 sm:px-4">Plan / Package</th>
                      <th className="py-3 px-3 sm:px-4">Access Type</th>
                      <th className="py-3 px-3 sm:px-4">Amount</th>
                      <th className="py-3 px-3 sm:px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                    {completedOrders.map((ord) => {
                      const dateStr = new Date(ord.createdAt).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      );
                      const planConfig =
                        SERVER_PLANS[ord.planId as keyof typeof SERVER_PLANS];
                      const planName = planConfig?.name || ord.planId.toUpperCase();
                      const cadenceLabel =
                        planConfig?.cadence === "monthly"
                          ? "Monthly Subscription"
                          : "Lifetime Access";

                      return (
                        <tr
                          key={ord.id}
                          className="hover:bg-gray-50/80 transition-colors"
                        >
                          <td className="py-4 px-3 sm:px-4 text-gray-500 whitespace-nowrap">
                            {dateStr}
                          </td>
                          <td className="py-4 px-3 sm:px-4 font-semibold text-[#0B2C13] whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span>{planName}</span>
                            </div>
                          </td>
                          <td className="py-4 px-3 sm:px-4 text-gray-600 whitespace-nowrap">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-700">
                              {cadenceLabel}
                            </span>
                          </td>
                          <td className="py-4 px-3 sm:px-4 whitespace-nowrap font-semibold text-gray-900">
                            ₹{(ord.amount / 100).toLocaleString("en-IN")}
                          </td>
                          <td className="py-4 px-3 sm:px-4 text-right whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                              Paid
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Delete Account Confirmation Modal Popup */}
      {isDeleteModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => {
            if (!deleting) setIsDeleteModalOpen(false);
          }}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-gray-100 relative text-left space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              disabled={deleting}
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Warning Icon & Content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                <AlertTriangle className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1.5 pr-4">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  Delete Account?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Are you sure you want to delete your account? This action cannot be undone. All your saved clinical progress and prompt access will be permanently removed.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
              <button
                type="button"
                disabled={deleting}
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleting}
                onClick={handleConfirmDelete}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60"
              >
                {deleting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Yes, Delete Account</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
