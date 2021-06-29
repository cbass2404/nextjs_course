import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
    const router = useRouter();

    console.log(router.query);

    const handleLoadProject = () => {
        router.push({
            pathname: '/clients/[id]/[clientproject]',
            query: { id: 'max', clientproject: 'projecta' },
        });
    };

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={handleLoadProject}>Load Project A</button>
        </div>
    );
};

export default ClientProjectsPage;
