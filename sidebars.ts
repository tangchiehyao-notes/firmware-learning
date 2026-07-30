import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  knowledgeHubSidebar: [
    'index',
    'learning-roadmap',
    {
      type: 'category',
      label: 'Architecture',
      link: {type: 'doc', id: 'architecture/index'},
      items: [
        'openbmc-architecture/index',
        {
          type: 'category',
          label: 'Linux',
          link: {type: 'doc', id: 'linux-internals/index'},
          items: [
            'linux-internals/linux-architecture',
            'linux-internals/user-space-vs-kernel-space',
            'linux-internals/linux-boot-process',
            'linux-internals/device-tree',
            'linux-internals/linux-driver-model',
            'linux-internals/u-boot',
          ],
        },
        'architecture/driver/index',
        'architecture/ipc/index',
        'architecture/bus/index',
        'architecture/protocol/index',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {type: 'doc', id: 'components/index'},
      items: [
        {
          type: 'category',
          label: 'phosphor-mctp',
          link: {type: 'doc', id: 'components/phosphor-mctp/index'},
          items: [
            'components/phosphor-mctp/architecture',
            'components/phosphor-mctp/dependencies',
            'components/phosphor-mctp/data-flow',
            'components/phosphor-mctp/ipc',
            'components/phosphor-mctp/code-mapping',
            'components/phosphor-mctp/debug',
            'components/phosphor-mctp/checkpoint',
          ],
        },
        'components/pldmd/index',
        'components/sdbusplus/index',
        'components/libpldm/index',
        'components/systemd/index',
        'components/component-template',
      ],
    },
    {
      type: 'category',
      label: 'Labs',
      link: {type: 'doc', id: 'labs/index'},
      items: [
        {
          type: 'category',
          label: 'Build',
          link: {type: 'doc', id: 'yocto/index'},
          items: ['docker/index'],
        },
        'labs/trace/index',
        'firmware-debugging/index',
        'labs/mini-project/index',
      ],
    },
    {
      type: 'category',
      label: 'Interview',
      link: {type: 'doc', id: 'interview/index'},
      items: [
        'interview/explain/index',
        'interview/draw/index',
        'interview/code-reading/index',
        'interview/debug-questions/index',
      ],
    },
    {
      type: 'category',
      label: 'Knowledge Base',
      link: {type: 'doc', id: 'knowledge-base/index'},
      items: ['modern-cpp/index'],
    },
  ],
};

export default sidebars;
