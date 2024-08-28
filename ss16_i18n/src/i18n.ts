import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Có thể được nhập từ một cấu hình được chia sẻ
const locales = ['en', 'vi'];
 
export default getRequestConfig(async ({locale}) => {
// Xác thực tham số `locale` đến là hợp lệ
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});