/**
 * 获取public目录下静态资源的完整URL
 * 自动处理base路径（支持子路径部署）
 * 
 * @param path - 相对于public目录的路径，可以以/开头或不以/开头
 * @returns 完整的资源URL
 * 
 * @example
 * getAssetUrl('/logo.png') // 返回: '/ai-ppt/logo.png'
 * getAssetUrl('logo.png')  // 返回: '/ai-ppt/logo.png'
 */
export const getAssetUrl = (path: string): string => {
  // 移除开头的斜杠（如果有）
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return import.meta.env.BASE_URL + cleanPath;
};
