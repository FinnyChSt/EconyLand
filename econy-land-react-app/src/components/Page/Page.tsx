import { PageContainer } from "./Page.styledComponents";

interface PageProps {
    children: React.ReactNode;
}


function Page ({ children }: PageProps) {
    return (
        <PageContainer>
            {children}
        </PageContainer>
    );
}

export default Page;