"use client";
import { useAuthStore } from "@/store/auth.store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // sidebar toggle icon

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userProfile, isLoading, fetchUser } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // fetch user once on mount
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && userProfile && userProfile.role !== "admin") {
      router.replace("/");
    }
  }, [userProfile, isLoading, router]);

  const navItems = useMemo(
    () => [
      { label: "Dashboard", href: "/admin" },
      { label: "Users", href: "/admin/users" },
      { label: "Create Session", href: "/admin/create-session" },
    ],
    []
  );

  if (isLoading || !userProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gray-400 text-sm">
          Loading admin panel...
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 w-60 bg-gray-900 text-gray-200 flex flex-col transform transition-transform duration-200 z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="px-5 py-4 border-b border-gray-700">
          <h2 className="text-lg font-bold tracking-wide">Admin Panel</h2>
          <p className="text-[11px] mt-1 text-gray-400 truncate">
            {userProfile.email}
          </p>
        </div>
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 flex items-center transition-colors border-l-4 ${
                  active
                    ? "bg-gray-800 text-white border-blue-500"
                    : "border-transparent hover:bg-gray-800/50 text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-4 py-3 border-t border-gray-800 text-[10px] text-gray-500">
          © {new Date().getFullYear()} EarlyToCode
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 bg-white shadow-sm flex items-center justify-between px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            <Menu size={18} />
          </button>
          <h1 className="text-sm font-semibold">Admin Dashboard</h1>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
