import Link from 'next/link';
import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const { id } = router.query;
    return (
      <>
        <Link href="/">Home</Link>
        <div>Post: {id}</div>
      </>
      
    )
  }
  
  export default Post;