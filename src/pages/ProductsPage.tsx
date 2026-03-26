import { useState } from 'react'
import type { PageType } from '../App'

interface ProductsPageProps {
  onNavigate: (page: PageType) => void
}

const skillPackages = [
  {
    id: 'promotion',
    emoji: '🚀',
    name: '推广提效技能包',
    tag: 'PROMOTION BOOST',
    tagColor: '#0f4c81',
    tagBg: '#e8f0fc',
    desc: '基于AI算法的全渠道智能投放体系，帮助企业实现精准获客、降本增效，平均提升广告ROI 40%以上。',
    skills: [
      { name: '智能出价优化', icon: '💡', desc: '实时竞价策略自动调整，降低无效消耗' },
      { name: '创意效果诊断', icon: '🎨', desc: '多维度素材效果分析与优化建议' },
      { name: '人群精准定向', icon: '🎯', desc: '基于行为数据的精准人群圈选与触达' },
      { name: '全链路归因分析', icon: '🔗', desc: '跨平台多触点归因，清晰呈现推广贡献' },
      { name: '预算智能分配', icon: '📊', desc: '动态预算分配，最大化整体投放效率' },
    ],
    badges: ['淘宝', '京东', '抖音', '快手'],
    color: '#0f4c81',
    gradient: 'linear-gradient(135deg, #0a3460, #1a6bc0)',
    highlight: '平均ROI提升 40%+',
  },
  {
    id: 'traffic',
    emoji: '📡',
    name: '流量诊断技能包',
    tag: 'TRAFFIC DIAGNOSIS',
    tagColor: '#065a3f',
    tagBg: '#e0f5ed',
    desc: '深度拆解流量结构与用户行为路径，精准定位流量瓶颈，为增长决策提供科学依据。',
    skills: [
      { name: '流量结构分析', icon: '📈', desc: '全渠道流量来源与质量深度拆解' },
      { name: '用户行为热图', icon: '🔥', desc: '可视化用户页面行为与注意力分布' },
      { name: '转化漏斗诊断', icon: '🔻', desc: '各环节转化率分析与流失原因定位' },
      { name: '竞品流量对比', icon: '⚖️', desc: '实时竞品流量动态监控与对标分析' },
      { name: '异常流量预警', icon: '⚠️', desc: '无效流量与异常波动智能识别告警' },
    ],
    badges: ['实时监控', '智能预警', '可视化'],
    color: '#059669',
    gradient: 'linear-gradient(135deg, #065a3f, #059669)',
    highlight: '流失率降低 35%+',
  },
  {
    id: 'selection',
    emoji: '🛒',
    name: '选品决策技能包',
    tag: 'PRODUCT SELECTION',
    tagColor: '#7c3aed',
    tagBg: '#f0ebfe',
    desc: '基于市场大数据与消费趋势洞察，智能推荐高潜力商品，助力选品决策科学化、精准化。',
    skills: [
      { name: '爆款潜力预测', icon: '⭐', desc: 'AI预测模型识别潜在爆款商品' },
      { name: '市场趋势分析', icon: '📅', desc: '搜索热度与消费趋势实时追踪' },
      { name: '竞争白热图', icon: '🗺️', desc: '品类竞争态势可视化全景分析' },
      { name: '价格区间优化', icon: '💲', desc: '基于竞品与消费力的定价策略建议' },
      { name: '库存风险预估', icon: '📦', desc: '销量预测与库存积压风险预警' },
    ],
    badges: ['淘宝', '拼多多', '京东', '抖音'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
    highlight: '选品准确率提升 50%+',
  },
  {
    id: 'growth',
    emoji: '📈',
    name: '用户增长技能包',
    tag: 'USER GROWTH',
    tagColor: '#d97706',
    tagBg: '#fef3c7',
    desc: '全生命周期用户运营方案，从拉新到留存到复购，构建可持续增长的用户运营体系。',
    skills: [
      { name: '用户分层模型', icon: '🗂️', desc: 'RFM多维用户价值分层与差异化运营' },
      { name: '流失预警与召回', icon: '📩', desc: '高危流失用户识别与精准召回策略' },
      { name: '会员体系设计', icon: '👑', desc: '游戏化会员积分体系设计与运营' },
      { name: '个性化推荐', icon: '✨', desc: '基于用户偏好的商品/内容智能推荐' },
      { name: '裂变增长引擎', icon: '🔄', desc: '社交裂变工具与增长活动策划执行' },
    ],
    badges: ['私域运营', 'CRM', '增长黑客'],
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #92400e, #d97706)',
    highlight: '复购率提升 45%+',
  },
  {
    id: 'data',
    emoji: '🧠',
    name: '数据智能技能包',
    tag: 'DATA INTELLIGENCE',
    tagColor: '#0891b2',
    tagBg: '#e0f7fa',
    desc: '打通企业数据孤岛，构建统一的数据中台，以智能BI驾驶舱支撑管理层实时决策。',
    skills: [
      { name: '数据中台搭建', icon: '🏗️', desc: '企业数据资产整合与统一管理平台' },
      { name: '智能BI仪表盘', icon: '📉', desc: '可定制实时业务经营数据看板' },
      { name: 'AI异常检测', icon: '🤖', desc: '基于机器学习的业务异常自动发现' },
      { name: '数据血缘追踪', icon: '🔍', desc: '完整数据流转路径可视化追踪' },
      { name: '自助取数平台', icon: '⚡', desc: '业务人员无需SQL即可自助分析' },
    ],
    badges: ['实时数仓', '可视化', 'AI分析'],
    color: '#0891b2',
    gradient: 'linear-gradient(135deg, #0e4f6e, #0891b2)',
    highlight: '决策效率提升 60%+',
  },
  {
    id: 'content',
    emoji: '✍️',
    name: '内容营销技能包',
    tag: 'CONTENT MARKETING',
    tagColor: '#e11d48',
    tagBg: '#ffe4e6',
    desc: '覆盖内容策划、生产、分发、评估全链路，以优质内容驱动品牌曝光与自然流量增长。',
    skills: [
      { name: '内容选题预测', icon: '💡', desc: 'AI分析热门趋势，智能推荐高潜力选题' },
      { name: 'AI辅助创作', icon: '🤖', desc: '商品详情页、短视频脚本AI生成工具' },
      { name: '达人匹配系统', icon: '⭐', desc: '基于品牌调性与预算的达人智能匹配' },
      { name: '内容效果追踪', icon: '📊', desc: '跨平台内容传播路径与效果监控' },
      { name: 'SEO/ASO优化', icon: '🔍', desc: '搜索引擎与应用商店关键词优化策略' },
    ],
    badges: ['小红书', '抖音', '公众号', 'B站'],
    color: '#e11d48',
    gradient: 'linear-gradient(135deg, #9f1239, #e11d48)',
    highlight: '自然流量增长 80%+',
  },
]

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const categories = [
    { id: 'all', label: '全部技能包' },
    { id: 'promotion', label: '推广提效' },
    { id: 'traffic', label: '流量诊断' },
    { id: 'growth', label: '用户增长' },
    { id: 'data', label: '数据智能' },
  ]

  const filteredPackages = activeTab === 'all'
    ? skillPackages
    : skillPackages.filter(p => p.id === activeTab)

  return (
    <div style={{ background: '#f7f9fc', minHeight: '100vh' }}>
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0a3460 0%, #1a6bc0 100%)',
        padding: '80px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle at 70% 50%, rgba(0,168,232,0.2) 0%, transparent 60%)`,
        }}/>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#33bff0', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
            CLAW SKILLS PACKAGES
          </div>
          <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            产品服务
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8, maxWidth: '600px' }}>
            辰月科技 Claw Skills 技能包体系——覆盖企业数字营销全链路，模块化灵活配置，快速赋能业务增长。
          </p>

          {/* Overview stats */}
          <div style={{ display: 'flex', gap: '32px', marginTop: '40px', flexWrap: 'wrap' }}>
            {[
              { n: '8', label: '大类技能包' },
              { n: '60+', label: '细分能力模块' },
              { n: '500+', label: '企业实践验证' },
              { n: '30%+', label: '平均ROI提升' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: '#00a8e8', fontSize: '32px', fontWeight: 700 }}>{s.n}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', gap: '4px', padding: '12px 0', overflowX: 'auto' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: activeTab === cat.id ? 600 : 400,
                  background: activeTab === cat.id ? '#0f4c81' : 'transparent',
                  color: activeTab === cat.id ? 'white' : '#4a5568',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== cat.id) {
                    e.currentTarget.style.background = '#f7f9fc'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== cat.id) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skill packages grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {filteredPackages.map((pkg) => {
            const isExpanded = expandedCard === pkg.id
            return (
              <div key={pkg.id} className="skill-card" style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                background: 'white',
                transition: 'all 0.3s ease',
                boxShadow: isExpanded ? '0 12px 40px rgba(15,76,129,0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                {/* Card header */}
                <div style={{
                  background: pkg.gradient,
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: '-30px', right: '-30px',
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                  }}/>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                    <div>
                      <div style={{ fontSize: '40px', marginBottom: '12px' }}>{pkg.emoji}</div>
                      <h3 style={{ color: 'white', fontWeight: 700, fontSize: '18px', marginBottom: '6px' }}>{pkg.name}</h3>
                      <span style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '11px',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontWeight: 500,
                      }}>{pkg.tag}</span>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.95)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      textAlign: 'center',
                      minWidth: '80px',
                    }}>
                      <div style={{ color: pkg.color, fontWeight: 700, fontSize: '13px', lineHeight: 1.3 }}>
                        {pkg.highlight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '24px' }}>
                  <p style={{ color: '#4a5568', fontSize: '13px', lineHeight: 1.8, marginBottom: '20px' }}>
                    {pkg.desc}
                  </p>

                  {/* Platform badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {pkg.badges.map(badge => (
                      <span key={badge} style={{
                        background: '#f7f9fc',
                        border: '1px solid #e2e8f0',
                        color: '#4a5568',
                        fontSize: '11px',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontWeight: 500,
                      }}>{badge}</span>
                    ))}
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : pkg.id)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '8px',
                      border: `1px solid ${isExpanded ? pkg.color : '#e2e8f0'}`,
                      background: isExpanded ? `${pkg.color}10` : 'white',
                      color: isExpanded ? pkg.color : '#4a5568',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}
                  >
                    {isExpanded ? '收起详情 ▲' : '查看能力详情 ▼'}
                  </button>

                  {/* Expanded skills list */}
                  {isExpanded && (
                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {pkg.skills.map((skill, si) => (
                        <div key={si} style={{
                          display: 'flex',
                          gap: '12px',
                          padding: '12px 14px',
                          background: '#f7f9fc',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          alignItems: 'flex-start',
                        }}>
                          <span style={{ fontSize: '20px', flexShrink: 0 }}>{skill.icon}</span>
                          <div>
                            <div style={{ fontWeight: 600, color: '#0a3460', fontSize: '13px', marginBottom: '3px' }}>
                              {skill.name}
                            </div>
                            <div style={{ color: '#718096', fontSize: '12px', lineHeight: 1.6 }}>
                              {skill.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div style={{ padding: '0 24px 20px' }}>
                  <button
                    onClick={() => onNavigate('contact')}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: '8px',
                      background: pkg.gradient,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '13px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    申请免费试用 →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '64px',
          background: 'linear-gradient(135deg, #0a3460, #1a6bc0)',
          borderRadius: '20px',
          padding: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
              找不到合适的技能包？
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.7 }}>
              我们提供定制化解决方案，根据您的业务场景量身打造专属技能包组合
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                padding: '13px 28px',
                borderRadius: '8px',
                background: '#00a8e8',
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              📞 定制咨询
            </button>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                padding: '13px 28px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                border: '1px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              📋 下载方案手册
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
