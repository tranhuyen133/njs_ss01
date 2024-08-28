import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
// Danh sách tất cả các ngôn ngữ được hỗ trợ
  locales: ['en', 'vi'],
 
// Được sử dụng khi không có ngôn ngữ nào khớp
  defaultLocale: 'en'
});
 
export const config = {
// Chỉ khớp với các tên đường dẫn quốc tế
  matcher: ['/', '/(vi|en)/:path*']
};