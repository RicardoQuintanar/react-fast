import React from "react";

const styles = {
    nav: {
        background: "orange",
        padding: 20,
        border: "solid 1px white"
    },
    content: {
        color: "black",
        width: "30%",
        textAlign: "center",
        fontSize: "16pt"
    }
}

const Nav = props => (
    <nav style={styles.nav} className="navbar">
        <a style={styles.content} className="navbar-brand" href="/">DBZ Click</a>
        <h3 style={styles.content}>Click on a DBZ Character to begin!</h3>
        <h3 style={styles.content}>Score: {props.score} | Top Score: {props.topScore}</h3>

    </nav>
);

export default Nav;