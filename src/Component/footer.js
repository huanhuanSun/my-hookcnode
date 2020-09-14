import React from 'react'
import { Layout, Affix } from 'antd'

export default function Footer() {
    return <>
        <Affix offsetBottom={0}>
            <Layout.Footer id="footer">
                <footer className="wrap">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</footer>
            </Layout.Footer>
        </Affix>
    </>
}