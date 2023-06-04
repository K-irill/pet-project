import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");

    return (
        <div>
            <h3>{t("Главная страница")}</h3>
            <h3>{t("Новый перевод")}</h3>
        </div>
    );
};

export default MainPage;