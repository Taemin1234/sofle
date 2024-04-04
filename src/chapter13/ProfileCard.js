import Card from './Card';

function ProfileCard(props) {
    return (
        <>
            <Card  backgroundColor="#4ea04e">
                <p>안녕하세요, 카즈하입니다.</p>
                <p>저는 육군 8사단 나왔습니다.</p>
            </Card>
            <Card title="Kazuha" >
                <p>안녕하세요, 신유입니다.</p>
                <p>저는 경산여고 나왔습니다.</p>
            </Card>
        </>
    )
}

export default ProfileCard;

