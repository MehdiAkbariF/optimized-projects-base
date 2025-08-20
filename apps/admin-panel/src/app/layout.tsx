import type { Metadata } from "next";
import { Inter } from "next/font/google";

// قدم ۱: ایمپورت فایل CSS سراسری از پکیج ui
// این فایل شامل دستورات اصلی Tailwind و استایل‌های پایه body است.
import "@repo/ui/globals.css";

// قدم ۲: تعریف و پیکربندی فونت Inter
// ما از یک متغیر CSS (--font-inter) استفاده می‌کنیم.
// این روش مدرن و بهینه‌ای است که به ما اجازه می‌دهد فونت را به راحتی در Tailwind استفاده کنیم.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // بهبود تجربه کاربری هنگام لود شدن فونت
});

// قدم ۳: تعریف متادیتای صفحه
export const metadata: Metadata = {
  title: "پنل مدیریت",
  description: "یک پنل مدیریت حرفه‌ای ساخته شده با Next.js",
};

// قدم ۴: ساختار اصلی Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    // تنظیم زبان فارسی و جهت راست-به-چپ برای کل اپلیکیشن
    <html lang="fa" dir="rtl">
      {/*
        قدم ۵: اعمال کلاس‌های لازم به تگ body
        - inter.variable: کلاسی را اضافه می‌کند که متغیر CSS --font-inter را تعریف می‌کند.
        - font-sans: این کلاس Tailwind را اعمال می‌کند تا فونت پیش‌فرض پروژه (که در کانفیگ ما Inter است) اعمال شود.
        - bg-slate-50 text-slate-900: این کلاس‌ها رنگ پس‌زمینه و متن پیش‌فرض را از دیزاین سیستم ما می‌خوانند.
      */}
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}