import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title> {title} - Genius Car Service</title>
        </Helmet>
    );
};


export default PageTitle;