import { Svg } from './contents.styled';

function Icon(props) {
    const { draw, color, margin } = props;

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" margin={margin}>
            origin Fontawesome
            <path d={draw} fill={color} />
        </Svg>
    );
}

export default Icon;