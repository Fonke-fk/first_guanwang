import type { PageType } from '../App'

interface AboutPageProps {
  onNavigate: (page: PageType) => void
}

const milestones = [
  { year: '2019', title: '公司创立', desc: '上海辰月数据科技有限公司正式成立，专注于智能数据分析领域。' },
  { year: '2020', title: '产品体系搭建', desc: '推出首款 Claw Skills 技能包，获得50余家种子客户验证。' },
  { year: '2021', title: '规模化增长', desc: '服务客户突破200家，完成A轮融资，团队规模扩展至100人。' },
  { year: '2022', title: '技术突破', desc: '推出AI驱动的流量诊断引擎，行业首家实现实时推广效果优化。' },
  { year: '2023', title: '生态构建', desc: '建立合作伙伴生态体系，联合50+头部平台提供数据赋能服务。' },
  { year: '2024', title: '全面领先', desc: '服务客户超500家，技能包产品线扩展至8大类，60+细分能力。' },
]

const teamMembers = [
  {
    name: '陈明远',
    title: '创始人 & CEO',
    bg: '#0f4c81',
    intro: '前阿里巴巴数据中台负责人，15年数字营销与大数据行业经验。',
    avatar: '👨‍💼',
  },
  {
    name: '张晓雯',
    title: '联合创始人 & CTO',
    bg: '#1a6bc0',
    intro: '前腾讯高级架构师，主导构建亿级数据处理平台，技术专利持有人。',
    avatar: '👩‍💻',
  },
  {
    name: '李家豪',
    title: '产品副总裁',
    bg: '#0088c7',
    intro: '连续创业者，深耕电商运营8年，主导打造多款百万级SaaS产品。',
    avatar: '👨‍🎨',
  },
  {
    name: '王芸芸',
    title: '运营总监',
    bg: '#00a8e8',
    intro: '资深数字营销专家，曾服务宝洁、联合利华等500强品牌数字化项目。',
    avatar: '👩‍💼',
  },
]

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div style={{ background: '#f7f9fc' }}>
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0a3460 0%, #1a6bc0 100%)',
        padding: '80px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle at 80% 50%, rgba(0,168,232,0.2) 0%, transparent 60%)`,
        }}/>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#33bff0', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
            ABOUT US
          </div>
          <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>关于我们</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8 }}>
            了解辰月数据科技的故事、团队与愿景
          </p>
        </div>
      </div>

      {/* Company Intro */}
      <section style={{ padding: '80px 48px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <div style={{ color: '#00a8e8', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', marginBottom: '8px' }}>
                COMPANY PROFILE
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0a3460', marginBottom: '12px' }}>公司简介</h2>
              <div className="section-divider"/>
              <p style={{ color: '#4a5568', lineHeight: 1.9, fontSize: '15px', marginBottom: '20px' }}>
                上海辰月数据科技有限公司（以下简称"辰月科技"）是一家专注于企业智能数据分析与数字营销提效的科技公司，
                总部位于上海浦东新区张江高科技园区。
              </p>
              <p style={{ color: '#4a5568', lineHeight: 1.9, fontSize: '15px', marginBottom: '20px' }}>
                辰月科技以"让数据驱动每一个商业决策"为核心理念，通过自主研发的 <strong style={{ color: '#0f4c81' }}>Claw Skills 技能包体系</strong>，
                为企业提供覆盖推广提效、流量诊断、选品优化、用户增长等全链路的智能数据服务。
              </p>
              <p style={{ color: '#4a5568', lineHeight: 1.9, fontSize: '15px' }}>
                公司已获得多轮风险投资支持，拥有50余项技术专利，与淘宝、京东、抖音、快手等主流平台建立深度战略合作，
                服务超过500家各行业头部客户，帮助企业实现平均30%以上的营销ROI提升。
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: '成立时间', value: '2019年', icon: '📅' },
                { label: '注册资本', value: '5000万人民币', icon: '💰' },
                { label: '员工规模', value: '200+ 名专业人才', icon: '👥' },
                { label: '服务客户', value: '500+ 家企业', icon: '🏢' },
                { label: '合作平台', value: '50+ 主流电商平台', icon: '🌐' },
                { label: '技术专利', value: '50+ 项自主专利', icon: '📋' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px',
                  background: '#f7f9fc',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                }}>
                  <span style={{ fontSize: '24px' }}>{item.icon}</span>
                  <div>
                    <div style={{ color: '#718096', fontSize: '12px' }}>{item.label}</div>
                    <div style={{ color: '#0a3460', fontWeight: 600, fontSize: '15px' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section style={{ padding: '80px 48px', background: '#f7f9fc' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0a3460' }}>发展历程</h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0f4c81, #00a8e8)', borderRadius: '2px', margin: '16px auto 0' }}/>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '80px',
              top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #0f4c81, #00a8e8)',
            }}/>
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '32px',
                marginBottom: '36px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '80px',
                  textAlign: 'right',
                  flexShrink: 0,
                  paddingTop: '4px',
                }}>
                  <span style={{
                    color: '#0f4c81',
                    fontWeight: 700,
                    fontSize: '15px',
                    background: 'white',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}>{m.year}</span>
                </div>
                {/* Dot */}
                <div style={{
                  width: '16px', height: '16px',
                  borderRadius: '50%',
                  background: i === milestones.length - 1 ? '#00a8e8' : '#0f4c81',
                  border: '3px solid white',
                  boxShadow: '0 0 0 2px #0f4c81',
                  flexShrink: 0,
                  marginTop: '4px',
                  zIndex: 1,
                }}/>
                <div style={{
                  flex: 1,
                  background: 'white',
                  borderRadius: '10px',
                  padding: '20px 24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ fontWeight: 700, color: '#0a3460', marginBottom: '8px' }}>{m.title}</div>
                  <div style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 48px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0a3460' }}>核心团队</h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0f4c81, #00a8e8)', borderRadius: '2px', margin: '16px auto 0' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {teamMembers.map((member, i) => (
              <div key={i} className="card-hover" style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                background: 'white',
              }}>
                <div style={{
                  background: `linear-gradient(135deg, ${member.bg}, #00a8e8)`,
                  padding: '32px 24px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '56px', marginBottom: '8px' }}>{member.avatar}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>{member.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '4px' }}>{member.title}</div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ color: '#718096', fontSize: '13px', lineHeight: 1.7 }}>{member.intro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '64px 48px',
        background: 'linear-gradient(135deg, #0a3460, #1a6bc0)',
        textAlign: 'center',
      }}>
        <h2 style={{ color: 'white', fontSize: '30px', fontWeight: 700, marginBottom: '16px' }}>
          与辰月科技携手，共创增长新未来
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', marginBottom: '32px' }}>
          立即了解我们的产品与服务，开启您的数字化增长之旅
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={() => onNavigate('products')}
            style={{
              padding: '12px 28px', borderRadius: '8px',
              background: '#00a8e8', color: 'white', fontWeight: 600, fontSize: '14px',
              border: 'none', cursor: 'pointer',
            }}
          >
            查看产品服务
          </button>
          <button
            onClick={() => onNavigate('contact')}
            style={{
              padding: '12px 28px', borderRadius: '8px',
              background: 'transparent', color: 'white', fontWeight: 600, fontSize: '14px',
              border: '2px solid rgba(255,255,255,0.5)', cursor: 'pointer',
            }}
          >
            联系我们
          </button>
        </div>
      </section>
    </div>
  )
}
