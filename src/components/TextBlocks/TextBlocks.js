import React from 'react';
import cvsImg from "../../assets/images/cvs.jpg";
import gitImg from "../../assets/images/git.jpeg";
import htmlImg from "../../assets/images/html.jpg";
import nodeImg from "../../assets/images/node.jpeg";
import {useTranslation, withTranslation} from "react-i18next";

const TextBlock = (props) => {
    return (
        <div className="work-books">
            <h3>{props.title}</h3>
            <div className="image-left">
                <img alt="cvs" src={props.image}/>
                <div className="desc">{props.children}</div>
                <div className="clear-both"></div>
            </div>
        </div>
    )
}

const TextBlocks = (props) => {
    const {t} = useTranslation()
    return (
        <>
            <TextBlock title={t("textBlocks.git.title")} image={gitImg}>
                <>
                    <p>{t("textBlocks.git.commands")}</p>
                    <ul>
                        <li>{t("textBlocks.git.checkout")}</li>
                        <li>{t("textBlocks.git.gitCheckout")}</li>
                        <li>{t("textBlocks.git.gitCommit")}</li>
                        <li>{t("textBlocks.git.gitAdd")}</li>
                        <li>{t("textBlocks.git.gitClone")}</li>
                        <li>{t("textBlocks.git.gitStatus")}</li>
                        <li>{t("textBlocks.git.gitPush")}</li>
                        <li>{t("textBlocks.git.gitPull")}</li>
                        <li>{t("textBlocks.git.gitBranch")}</li>
                        <li>{t("textBlocks.git.gitMerge")}</li>
                    </ul>
                </>
            </TextBlock>
            <TextBlock title={t("textBlocks.system.titleSystem")} image={cvsImg}>
                <p><strong>{t("textBlocks.system.systemVersion")}</strong>{t("textBlocks.system.textSystem")}</p>
            </TextBlock>
            <TextBlock title={t("textBlocks.html.titleHtml")} image={htmlImg}>
                <p>{t("textBlocks.html.textHtml1")}</p>
                <p>{t("textBlocks.html.elemHtml")}</p>
                <ul>
                    <li>{t("textBlocks.html.block")}</li>
                    <li>{t("textBlocks.html.inline")}</li>
                    <li>{t("textBlocks.html.inlineBlock")}</li>
                </ul>
            </TextBlock>
            <TextBlock title={t("textBlocks.nodeJs.titleNodeJj")} image={nodeImg}>
                <p> {t("textBlocks.nodeJs.textNodeJs")}</p>
            </TextBlock>
        </>
    )
}
export default TextBlocks