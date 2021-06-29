import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Selected Project of a Specific Client</h1>
        </div>
    );
};

export default SelectedClientProjectPage;
