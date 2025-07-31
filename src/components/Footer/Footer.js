import React from "react";

function Footer() {
    return (
        <footer style={{ textAlign: "center", color: "#aaa", padding: 16, fontSize: 15 }}>
            © {new Date().getFullYear()} Rahul Sahu. All rights reserved.
        </footer>
    );
}

export default Footer;