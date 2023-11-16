import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const RequireAuth = ({ children }) => {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return navigate("/wc")

    }, [user, navigate]);


    return children;
};

export default RequireAuth;