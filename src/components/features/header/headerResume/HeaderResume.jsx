import { Link } from "react-router-dom";
import { ResumeTitle } from './HeaderResume.styled';

function HeaderResume() {
    return (
        <Link to="/">
            <ResumeTitle>
                ./François Macko
            </ResumeTitle>
        </Link>
    );
}

export default HeaderResume;