import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const roadmapPhases = [
  {
    label: 'Phase 01',
    title: 'Linux Fundamentals',
    description:
      '先建立 user space / kernel space、system call、process、thread、memory 與 I/O 的底層理解。',
    link: '/docs/linux-internals',
  },
  {
    label: 'Phase 02',
    title: 'Modern C++ for Firmware',
    description:
      '把 ownership、RAII、template、concurrency 等觀念，轉成可維護韌體程式碼的基本功。',
    link: '/docs/modern-cpp',
  },
  {
    label: 'Phase 03',
    title: 'OpenBMC System View',
    description:
      '把 service、D-Bus、sensor、Redfish、MCTP、PLDM 串成完整系統地圖。',
    link: '/docs/openbmc-architecture',
  },
  {
    label: 'Phase 04',
    title: 'Build, Delivery, Debug',
    description:
      '把 Yocto、Docker 與 Firmware Debugging 接到真正的開發、建置與問題分析流程。',
    link: '/docs/yocto',
  },
];

const topicCards = [
  {
    title: 'Linux Internals',
    summary: 'Privilege boundary、process model、system call、memory 與 debug 視角。',
    to: '/docs/linux-internals',
    repo: 'https://github.com/tangchiehyao-notes/linux-internals-notes',
  },
  {
    title: 'Modern C++',
    summary: 'Ownership、RAII、move semantics、template 與 concurrency 的工程實作觀點。',
    to: '/docs/modern-cpp',
    repo: 'https://github.com/tangchiehyao-notes/modern-cpp-notes',
  },
  {
    title: 'OpenBMC Architecture',
    summary: '從 boot flow 到 D-Bus、sensor、Redfish 與管理協定的整體架構。',
    to: '/docs/openbmc-architecture',
    repo: 'https://github.com/tangchiehyao-notes/openbmc-architecture-notes',
  },
  {
    title: 'Yocto',
    summary: 'Layer、recipe、build flow 與 OpenBMC 背後的 build system 思維。',
    to: '/docs/yocto',
    repo: 'https://github.com/tangchiehyao-notes/yocto-notes',
  },
  {
    title: 'Docker',
    summary: '把開發環境、toolchain 與 CI 做到可重現、可攜、可快速復現。',
    to: '/docs/docker',
    repo: 'https://github.com/tangchiehyao-notes/docker-notes',
  },
  {
    title: 'Firmware Debugging',
    summary: 'RCA、log 分析、core dump、race condition 與 case study 方法論。',
    to: '/docs/firmware-debugging',
    repo: 'https://github.com/tangchiehyao-notes/firmware-debugging-notes',
  },
];

const repositoryLinks = [
  {
    label: 'Knowledge Hub Site',
    href: 'https://github.com/tangchiehyao-notes/firmware-learning',
  },
  {
    label: 'linux-internals-notes',
    href: 'https://github.com/tangchiehyao-notes/linux-internals-notes',
  },
  {
    label: 'modern-cpp-notes',
    href: 'https://github.com/tangchiehyao-notes/modern-cpp-notes',
  },
  {
    label: 'openbmc-architecture-notes',
    href: 'https://github.com/tangchiehyao-notes/openbmc-architecture-notes',
  },
  {
    label: 'yocto-notes',
    href: 'https://github.com/tangchiehyao-notes/yocto-notes',
  },
  {
    label: 'docker-notes',
    href: 'https://github.com/tangchiehyao-notes/docker-notes',
  },
  {
    label: 'firmware-debugging-notes',
    href: 'https://github.com/tangchiehyao-notes/firmware-debugging-notes',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="OpenBMC / Embedded Linux Knowledge Hub"
      description="OpenBMC / Embedded Linux 學習筆記、技術成長地圖與面試作品集網站。">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>Firmware Engineer Knowledge Base</span>
                <h1 className={styles.heroTitle}>OpenBMC Learning Hub</h1>
                <p className={styles.heroSubtitle}>
                  以 OpenBMC / Embedded Linux 為主軸，集中整理 Linux internals、Modern
                  C++、Yocto、Docker 與 Firmware Debugging 的長期知識庫。
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to="/docs">
                    進入文件中心
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/learning-roadmap">
                    查看學習地圖
                  </Link>
                </div>
                <div className={styles.heroMeta}>
                  <span>Markdown-driven</span>
                  <span>GitHub Pages</span>
                  <span>Interview-oriented</span>
                  <span>Long-term Maintainable</span>
                </div>
              </div>
              <div className={styles.heroPanel}>
                <div className={styles.panelCard}>
                  <span className={styles.panelLabel}>Hub Focus</span>
                  <h2>從學習筆記進化成可展示的工程作品集</h2>
                  <ul>
                    <li>把零散筆記整理成可查閱的知識架構</li>
                    <li>保留每個主題的成長軌跡與深入程度</li>
                    <li>讓面試官一眼看到你的技術地圖與思考方式</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Learning Roadmap</span>
              <h2>技術學習地圖</h2>
              <p>
                這個 Hub 的設計不是把主題平鋪直敘，而是用一條對 Firmware Engineer
                比較順手的學習路線把它們串起來。
              </p>
            </div>
            <div className={styles.roadmapGrid}>
              {roadmapPhases.map((phase) => (
                <Link key={phase.title} className={styles.roadmapCard} to={phase.link}>
                  <span className={styles.phaseLabel}>{phase.label}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Topic Entry Points</span>
              <h2>主題入口</h2>
              <p>
                目前先以單一網站整合六條知識線，未來可以繼續擴充新主題，而不需要拆成多個網站。
              </p>
            </div>
            <div className={styles.topicGrid}>
              {topicCards.map((card) => (
                <article key={card.title} className={styles.topicCard}>
                  <div className={styles.topicCardHeader}>
                    <h3>{card.title}</h3>
                    <Link className={styles.inlineLink} to={card.to}>
                      Docs
                    </Link>
                  </div>
                  <p>{card.summary}</p>
                  <div className={styles.cardActions}>
                    <Link className="button button--primary button--sm" to={card.to}>
                      查看文件
                    </Link>
                    <Link className="button button--secondary button--sm" href={card.repo}>
                      Repo
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>GitHub</span>
              <h2>Repository Links</h2>
              <p>
                網站是 Knowledge Hub 的入口，底層筆記可以維持分主題演化。未來若你把內容逐步回收到單一 repo，這裡也能自然調整。
              </p>
            </div>
            <div className={styles.repoGrid}>
              {repositoryLinks.map((repo) => (
                <Link key={repo.label} className={styles.repoLink} href={repo.href}>
                  <span>{repo.label}</span>
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
