import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function setCookie (key,value)
{
  cookies.set(key, value);
  console.log('set cookie :'+ value);
}

export default function getCookie(key)
{
  return cookies.get(key);
}
