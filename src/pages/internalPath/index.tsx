import { GetServerSideProps } from "next"

type PageProps = {
  title: string;
}

const Page = ({ title }: PageProps) => <>
  <h1>{title}</h1>
</>

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return { props: { title: "Page With Rewrite" } }
}

export default Page