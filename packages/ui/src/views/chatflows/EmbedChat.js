import { useState } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Box } from '@mui/material'
import { CopyBlock, atomOneDark } from 'react-code-blocks'
// Project import
import { CheckboxInput } from 'ui-component/checkbox/Checkbox'
// Const
import { baseURL } from 'store/constant'
import { useSelector } from 'react-redux'
function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`attachment-tabpanel-${index}`}
            aria-labelledby={`attachment-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
        </div>
    )
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}
function a11yProps(index) {
    return {
        id: `attachment-tab-${index}`,
        'aria-controls': `attachment-tabpanel-${index}`
    }
}
const EmbedChat = ({ chatflowid }) => {
    const codes = ['Popup Html', 'Fullpage Html', 'Popup React', 'Fullpage React']
    const [value, setValue] = useState(0)
    const [embedChatCheckboxVal, setEmbedChatCheckbox] = useState(false)
    const chatflow = useSelector((state) => state.canvas.chatflow)
    // chatflowid = chatflow.id
    const chatbotConfig = chatflow.chatbotConfig ? JSON.parse(chatflow.chatbotConfig) : {}
    const embedPopupHtmlCode = (chatflowid) => {
        return `<script type="module">
        import Chatbot from "https://cdn.jsdelivr.net/gh/axentiatech/FlowiseChatEmbed@9df31ed4a83c09cf306178c903c9543371a9025e/dist/web.js"
        Chatbot.init({
            chatflowid: "${chatflowid}",
            apiHost: "${baseURL}",
        })
    </script>`
    }
    const embedPopupReactCode = (chatflowid) => {
        return `import { BubbleChat } from 'flowise-embed-react'
    
    const App = () => {
        return (
            <BubbleChat chatflowid="${chatflowid}" apiHost="${baseURL}" />
        );
    };`
    }
    const embedFullpageHtmlCode = (chatflowid) => {
        return `<flowise-fullchatbot></flowise-fullchatbot>
    <script type="module">
        import Chatbot from "https://cdn.jsdelivr.net/gh/axentiatech/FlowiseChatEmbed@9df31ed4a83c09cf306178c903c9543371a9025e/dist/web.js"
        Chatbot.initFull({
            chatflowid: "${chatflowid}",
            apiHost: "${baseURL}",
        })
    </script>`
    }
    const embedFullpageReactCode = (chatflowid) => {
        return `import { FullPageChat } from "flowise-embed-react"
    
    const App = () => {
        return (
            <FullPageChat
                chatflowid="${chatflowid}"
                apiHost="${baseURL}"
            />
        );
    };`
    }
    const buttonConfig = (isReact = false) => {
        return isReact
            ? `button: {
                        backgroundColor: "#E88B49",
                        right: 20,
                        bottom: 20,
                        size: "medium",
                        iconColor: "white",
                        customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                    }`
            : `button: {
                    backgroundColor: "#E88B49",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                }`
    }
    const chatwindowConfig = (isReact = false) => {
        return isReact
            ? `chatWindow: {
                    showTitle: true, // show/hide the title bar
                    title: "${chatbotConfig?.title}",
                    titleAvatarSrc: "${chatbotConfig?.titleAvatarSrc}",
                    welcomeMessage: "${chatbotConfig?.titleAvatarSrc}",
                    backgroundColor:"${chatbotConfig?.titleAvatarSrc}",
                    height: 600,
                    width: 400,
                    fontSize:"${chatbotConfig?.fontSize}",
                    poweredByTextColor: "${chatbotConfig?.poweredByTextColor}",
                    botMessage: {
                        backgroundColor:"${chatbotConfig?.botMessage?.backgroundColor}",
                        textColor: "${chatbotConfig?.botMessage?.textColor}",
                        showAvatar: "${chatbotConfig?.botMessage?.showAvatar}",
                        avatarSrc: "${chatbotConfig?.botMessage?.avatarSrc}",
                    },
                    userMessage: {
                        backgroundColor:  "${chatbotConfig?.userMessage?.backgroundColor}",
                        textColor: "${chatbotConfig?.userMessage?.textColor}",
                        showAvatar: "${chatbotConfig?.userMessage?.showAvatar}",
                        avatarSrc: "${chatbotConfig?.userMessage.avatarSrc}",
                    },
                    textInput: {
                        placeholder: "${chatbotConfig?.textInput?.placeholder}",
                        backgroundColor: "${chatbotConfig?.textInput?.backgroundColor}",
                        textColor: "${chatbotConfig?.textInput?.textColor}",
                        sendButtonColor: "${chatbotConfig?.textInput?.sendButtonColor}",
                    }
                }`
            : `chatWindow: {
                    showTitle: true, // show/hide the title bar
                    title: "${chatbotConfig?.title}",
                    titleAvatarSrc: "${chatbotConfig?.titleAvatarSrc}",
                    welcomeMessage: "${chatbotConfig?.titleAvatarSrc}",
                    backgroundColor:"${chatbotConfig?.titleAvatarSrc}",
                    height: 600,
                    width: 400,
                    fontSize:"${chatbotConfig?.fontSize}",
                    poweredByTextColor: "${chatbotConfig?.poweredByTextColor}",
                    botMessage: {
                        backgroundColor:"${chatbotConfig?.botMessage?.backgroundColor}",
                        textColor: "${chatbotConfig?.botMessage?.textColor}",
                        showAvatar: "${chatbotConfig?.botMessage?.showAvatar}",
                        avatarSrc: "${chatbotConfig?.botMessage?.avatarSrc}",
                    },
                    userMessage: {
                        backgroundColor:  "${chatbotConfig?.userMessage?.backgroundColor}",
                        textColor: "${chatbotConfig?.userMessage?.textColor}",
                        showAvatar: "${chatbotConfig?.userMessage?.showAvatar}",
                        avatarSrc: "${chatbotConfig?.userMessage}",
                    },
                    textInput: {
                        placeholder: "${chatbotConfig?.textInput?.placeholder}",
                        backgroundColor: "${chatbotConfig?.textInput?.backgroundColor}",
                        textColor: "${chatbotConfig?.textInput?.textColor}",
                        sendButtonColor: "${chatbotConfig?.textInput?.sendButtonColor}",
                    }
                }`
    }
    const embedPopupHtmlCodeCustomization = (chatflowid) => {
        return `<script type="module">
        import Chatbot from "https://cdn.jsdelivr.net/gh/axentiatech/FlowiseChatEmbed@9df31ed4a83c09cf306178c903c9543371a9025e/dist/web.js"
        Chatbot.init({
            chatflowid: "${chatflowid}",
            apiHost: "${baseURL}",
            chatflowConfig: {
                // topK: 2
            },
            theme: {
                ${buttonConfig()},
                ${chatwindowConfig()}
            }
        })
    </script>`
    }
    const embedPopupReactCodeCustomization = (chatflowid) => {
        return `import { BubbleChat } from 'flowise-embed-react'
    
    const App = () => {
        return (
            <BubbleChat
                chatflowid="${chatflowid}"
                apiHost="${baseURL}"
                theme={{
                    ${buttonConfig(true)},
                    ${chatwindowConfig(true)}
                }}
            />
        );
    };`
    }
    const embedFullpageHtmlCodeCustomization = (chatflowid) => {
        return `<flowise-fullchatbot></flowise-fullchatbot>
    <script type="module">
        import Chatbot from "https://cdn.jsdelivr.net/gh/axentiatech/FlowiseChatEmbed@9df31ed4a83c09cf306178c903c9543371a9025e/dist/web.js"
        Chatbot.initFull({
            chatflowid: "${chatflowid}",
            apiHost: "${baseURL}",
            theme: {
                ${chatwindowConfig()}
            }
        })
    </script>`
    }
    const embedFullpageReactCodeCustomization = (chatflowid) => {
        return `import { FullPageChat } from "flowise-embed-react"
    
    const App = () => {
        return (
            <FullPageChat
                chatflowid="${chatflowid}"
                apiHost="${baseURL}"
                theme={{
                    ${chatwindowConfig(true)}
                }}
            />
        );
    };`
    }
    const onCheckBoxEmbedChatChanged = (newVal) => {
        setEmbedChatCheckbox(newVal)
    }
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const getCode = (codeLang) => {
        switch (codeLang) {
            case 'Popup Html':
                return embedPopupHtmlCode(chatflowid)
            case 'Fullpage Html':
                return embedFullpageHtmlCode(chatflowid)
            case 'Popup React':
                return embedPopupReactCode(chatflowid)
            case 'Fullpage React':
                return embedFullpageReactCode(chatflowid)
            default:
                return ''
        }
    }
    const getCodeCustomization = (codeLang) => {
        switch (codeLang) {
            case 'Popup Html':
                return embedPopupHtmlCodeCustomization(chatflowid)
            case 'Fullpage Html':
                return embedFullpageHtmlCodeCustomization(chatflowid)
            case 'Popup React':
                return embedPopupReactCodeCustomization(chatflowid)
            case 'Fullpage React':
                return embedFullpageReactCodeCustomization(chatflowid)
            default:
                return ''
        }
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ flex: 80 }}>
                    <Tabs value={value} onChange={handleChange} aria-label='tabs'>
                        {codes.map((codeLang, index) => (
                            <Tab key={index} label={codeLang} {...a11yProps(index)}></Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
            <div style={{ marginTop: 10 }}></div>
            {codes.map((codeLang, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {(value === 0 || value === 1) && (
                        <>
                            <span>
                                Paste this anywhere in the <code>{`<body>`}</code> tag of your html file.
                                <p>
                                    You can also specify a&nbsp;
                                    <a
                                        rel='noreferrer'
                                        target='_blank'
                                        href='https://www.npmjs.com/package/flowise-embed?activeTab=versions'
                                    >
                                        version
                                    </a>
                                    :&nbsp;
                                    <code>{`https://cdn.jsdelivr.net/npm/flowise-embed@<version>/dist/web.js`}</code>
                                </p>
                            </span>
                            <div style={{ height: 10 }}></div>
                        </>
                    )}
                    <CopyBlock theme={atomOneDark} text={getCode(codeLang)} language='javascript' showLineNumbers={false} wrapLines />
                    <CheckboxInput label='Show Embed Chat Config' value={embedChatCheckboxVal} onChange={onCheckBoxEmbedChatChanged} />
                    {embedChatCheckboxVal && (
                        <CopyBlock
                            theme={atomOneDark}
                            text={getCodeCustomization(codeLang)}
                            language='javascript'
                            showLineNumbers={false}
                            wrapLines
                        />
                    )}
                </TabPanel>
            ))}
        </>
    )
}
EmbedChat.propTypes = {
    chatflowid: PropTypes.string
}
export default EmbedChat
