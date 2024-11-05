import './button.css'

function MyButton({count, btnClick}) {

    function double(count) {
        return count * 2
    }

    return (
        <>
            <button className="btnCount" onClick={btnClick} style={{width: '200px', height: '40px'}}>
                Click {double(count)} Times
            </button>
        </>
    );
}

export default MyButton