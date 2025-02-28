/** @type {import('tailwindcss').Config} */
module.exports = {
  // 保证Tailwind可以扫描到所有需要处理的文件
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 添加这个配置确保 Tailwind 不会被其他样式覆盖
  important: true,
}