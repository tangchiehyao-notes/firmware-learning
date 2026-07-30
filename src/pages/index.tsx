import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const roadmapStages = [
  {
    label: 'Stage 01',
    title: 'Architecture',
    description:
      '先把 OpenBMC、Linux、driver、bus、protocol 與 system boundary 畫成同一張圖。',
    link: '/docs/architecture',
  },
  {
    label: 'Stage 02',
    title: 'Components',
    description:
      '把 daemon、library、service 與 dependency 關係對到 source tree、entry point 與 IPC。',
    link: '/docs/components',
  },
  {
    label: 'Stage 03',
    title: 'Labs',
    description:
      '把 build、trace、debug 與 mini project 練成可以重現、可以驗證的工程能力。',
    link: '/docs/labs',
  },
  {
    label: 'Stage 04',
    title: 'Interview',
    description:
      '確認自己能說清楚系統圖、畫出資料流、讀 code、回答除錯題。',
    link: '/docs/interview',
  },
];

const capabilityCards = [
  {
    title: 'System Architecture',
    summary: '從 layer、service graph、device path 到 boot handoff，建立真正可用的系統觀。',
  },
  {
    title: 'Component Mapping',
    summary: '知道每個 service、daemon、library 在做什麼，也知道誰呼叫誰。',
  },
  {
    title: 'IPC and Data Flow',
    summary: '把 D-Bus、socket、MCTP、PLDM、bus event 與 state transition 串成完整請求路徑。',
  },
  {
    title: 'Code Reading',
    summary: '能從 architecture 問題一路定位到 repo、entry point、主要型別與 log。',
  },
  {
    title: 'Build, Trace, Debug',
    summary: '不只知道概念，還要能自己 build、追資料流、縮小 root cause。',
  },
  {
    title: 'Interview Narrative',
    summary: '把零散筆記整理成可以講給面試官聽的工程故事與系統圖。',
  },
];

const focusAreas = [
  {
    title: 'Architecture',
    description: 'OpenBMC、Linux、driver、bus、protocol 的系統入口，先把路徑看懂。',
    to: '/docs/architecture',
  },
  {
    title: 'Components',
    description: '用統一模板拆解 phosphor-mctp、pldmd、sdbusplus、libpldm、systemd。',
    to: '/docs/components',
  },
  {
    title: 'Labs',
    description: 'Build、Trace、Debug、Mini Project，讓理解變成可以操作的工程能力。',
    to: '/docs/labs',
  },
  {
    title: 'Interview',
    description: 'Explain、Draw、Code Reading、Debug Questions，驗證是否真的能講清楚。',
    to: '/docs/interview',
  },
];

const knowledgeBaseLinks = [
  {
    label: 'Modern C++ Knowledge Base',
    href: '/docs/knowledge-base',
  },
  {
    label: 'Linux Internals Repo',
    href: 'https://github.com/tangchiehyao-notes/linux-internals-notes',
  },
  {
    label: 'OpenBMC Architecture Repo',
    href: 'https://github.com/tangchiehyao-notes/openbmc-architecture-notes',
  },
  {
    label: 'Roadmap Repository',
    href: 'https://github.com/tangchiehyao-notes/firmware-learning',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Firmware Engineer Roadmap"
      description="把 OpenBMC / Embedded Linux 筆記重整成 architecture, components, labs, interview 四段式學習路線。">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>Firmware Engineer Portfolio Roadmap</span>
                <h1 className={styles.heroTitle}>Build Firmware Thinking, Not Just Notes.</h1>
                <p className={styles.heroSubtitle}>
                  這個站把 OpenBMC / Embedded Linux 的學習內容重新整理成
                  <strong> Architecture</strong>、<strong> Components</strong>、
                  <strong> Labs</strong>、<strong> Interview</strong> 四個階段，目標不是堆知識點，
                  而是訓練系統架構理解、IPC 與資料流判讀、source code 對照，以及真正能落地的
                  debug 能力。
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to="/docs">
                    進入 Roadmap
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/learning-roadmap">
                    查看學習順序
                  </Link>
                </div>
                <div className={styles.heroMeta}>
                  <span>Architecture first</span>
                  <span>Code mapping ready</span>
                  <span>Labs included</span>
                  <span>Interview oriented</span>
                </div>
              </div>
              <div className={styles.heroPanel}>
                <div className={styles.panelCard}>
                  <span className={styles.panelLabel}>First Release Focus</span>
                  <h2>先完成可導航、可擴充、可當作品集的骨架。</h2>
                  <ul>
                    <li>新首頁與四階段 roadmap</li>
                    <li>Architecture / Components / Labs / Interview 導覽</li>
                    <li>phosphor-mctp 元件模板示範</li>
                    <li>既有 Linux / Yocto / Docker / Debug 內容重新歸位</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Four Stages</span>
              <h2>四個學習階段</h2>
              <p>
                這個站先把 firmware engineer 真正需要的能力拆成四段，先懂系統，再懂元件，再做實作，
                最後確認能講清楚。
              </p>
            </div>
            <div className={styles.roadmapGrid}>
              {roadmapStages.map((stage) => (
                <Link key={stage.title} className={styles.roadmapCard} to={stage.link}>
                  <span className={styles.phaseLabel}>{stage.label}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Training Goals</span>
              <h2>這個網站要練成的能力</h2>
              <p>
                每個頁面都應該回到一個清楚問題，並且幫助讀者從 architecture 走到 code 與 debug，
                而不是停在名詞整理。
              </p>
            </div>
            <div className={styles.topicGrid}>
              {capabilityCards.map((card) => (
                <article key={card.title} className={styles.topicCard}>
                  <div className={styles.topicCardHeader}>
                    <h3>{card.title}</h3>
                  </div>
                  <p>{card.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Roadmap Areas</span>
              <h2>第一版先把骨架搭起來</h2>
              <p>
                目前先優先完成資訊架構、統一模板與既有內容搬位，讓後續每一篇深入文章都有清楚落點。
              </p>
            </div>
            <div className={styles.repoGrid}>
              {focusAreas.map((area) => (
                <Link key={area.title} className={styles.repoLink} to={area.to}>
                  <div>
                    <strong>{area.title}</strong>
                    <p>{area.description}</p>
                  </div>
                  <span className={styles.repoArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Preserved Notes</span>
              <h2>舊資料不刪除，先重新歸位</h2>
              <p>
                現有 Linux Internals 文章會成為 Architecture / Linux 的第一批內容；Yocto、Docker、
                Modern C++ 與其他獨立 repo 先保留在知識庫與參考入口，避免改版時遺失原始筆記。
              </p>
            </div>
            <div className={styles.repoGrid}>
              {knowledgeBaseLinks.map((link) => (
                <Link key={link.label} className={styles.repoLink} href={link.href}>
                  <span>{link.label}</span>
                  <span className={styles.repoArrow}>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
