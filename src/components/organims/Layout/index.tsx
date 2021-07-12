import React from 'react';
import Footer from '../footer';
import Header from '../header';
import './style.scss';

interface IProps {
    children: React.ReactNode;
}

const Index = (props: IProps) => {
    const { children } = props;
    return (
        <>
            <Header></Header>
            <main className="o-layout__main">main</main>
            <Footer></Footer>
        </>
    );
};

export default Index;
