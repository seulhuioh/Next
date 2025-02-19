"use client"; // useRouter 사용 시 필수

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/about'); // 동적으로 이동
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Link를 이용한 정적 라우팅 */}
      <Link href="/about">
        <Button variant="contained" color="primary">Link로 이동</Button>
      </Link>

      {/* useRouter를 이용한 동적 라우팅 */}
      <Button variant="outlined" color="secondary" onClick={handleNavigation} style={{ marginLeft: '10px' }}>
        useRouter
      </Button>
    </div>
  );
}
