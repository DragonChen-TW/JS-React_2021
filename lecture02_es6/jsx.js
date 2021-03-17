{/* <h1 className="greeting">
    Hello, World!
</h1> */}

React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, World!'
);


export default () => {
    const age = 5;
    const name = 'Crayon Shin-chan';

    return (
        <div>我叫 {name}, 我今年 {age} 歲</div>
    )
};

