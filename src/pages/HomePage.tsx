import type { PageType } from '../App'

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

const stats = [
  { number: '500+', label: '服务客户' },
  { number: '98%', label: '客户满意度' },
  { number: '50+', label: '核心技能包' },
  { number: '5年+', label: '行业经验' },
]

const features = [
  {
    icon: '🚀',
    title: '智能推广提效',
    desc: '基于AI算法的精准投放策略，帮助企业最大化广告ROI，实现降本增效。'
  },
  {
    icon: '📊',
    title: '数据驱动决策',
    desc: '全链路数据采集与分析，为企业提供科学的经营决策依据和实时业务洞察。'
  },
  {
    icon: '🎯',
    title: '流量精准诊断',
    desc: '深度分析流量来源与用户行为，快速定位问题，提升转化效率和用户留存。'
  },
  {
    icon: '⚡',
    title: '敏捷交付能力',
    desc: '模块化技能包设计，快速响应业务需求，灵活配置，高效落地。'
  },
]

const coreValues = [
  { title: '技术驱动', desc: '以前沿AI与大数据技术为核心，持续创新', icon: '💡' },
  { title: '客户优先', desc: '深度理解客户业务，提供定制化解决方案', icon: '🤝' },
  { title: '数据安全', desc: '严格的数据安全管理体系，保障客户隐私', icon: '🔒' },
  { title: '持续成长', desc: '不断迭代升级产品，与客户共同成长', icon: '📈' },
]

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div style={{ background: '#f7f9fc' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a3460 0%, #0f4c81 40%, #1a6bc0 70%, #00a8e8 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,168,232,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)`,
        }}/>
        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
            width: `${(i+1) * 120}px`,
            height: `${(i+1) * 120}px`,
            top: '50%', left: '75%',
            transform: 'translate(-50%, -50%)',
            animation: `pulse-glow ${3 + i}s ease-in-out infinite`,
          }}/>
        ))}

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 48px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,168,232,0.2)', border: '1px solid rgba(0,168,232,0.4)',
            borderRadius: '24px', padding: '6px 16px', marginBottom: '24px',
            color: '#33bff0', fontSize: '13px', fontWeight: 500,
          }}>
            <span>⚡</span> 智能数据驱动 · 赋能企业增长
          </div>

          <h1 style={{
            color: 'white',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '20px',
            animation: 'fadeInUp 0.8s ease',
          }}>
            上海辰月数据科技
            <br />
            <span style={{ color: '#00a8e8' }}>引领数字化转型</span>新未来
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '18px',
            lineHeight: 1.8,
            maxWidth: '600px',
            marginBottom: '40px',
            animation: 'fadeInUp 0.8s ease 0.2s both',
          }}>
            专注于智能数据分析与业务提效，为企业提供一站式数字营销解决方案。
            凭借领先的AI技术和丰富的行业经验，助力企业实现精准增长。
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeInUp 0.8s ease 0.4s both' }}>
            <button
              onClick={() => onNavigate('products')}
              style={{
                padding: '14px 32px',
                borderRadius: '8px',
                background: '#00a8e8',
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,168,232,0.4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#33bff0'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#00a8e8'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              探索技能包 →
            </button>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                padding: '14px 32px',
                borderRadius: '8px',
                background: 'transparent',
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                border: '2px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              }}
            >
              联系我们
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginTop: '64px',
            animation: 'fadeInUp 0.8s ease 0.6s both',
          }}>
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div style={{ color: '#00a8e8', fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginTop: '6px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '96px 48px', background: 'white', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#00a8e8', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
              ABOUT US
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0a3460', marginBottom: '12px' }}>
              关于辰月数据科技
            </h2>
            <div className="section-divider" />
            <p style={{ color: '#4a5568', lineHeight: 1.9, fontSize: '15px', marginBottom: '20px' }}>
              上海辰月数据科技有限公司成立于2019年，是一家专注于智能数据分析与数字营销提效的科技企业。
              我们汇聚了来自BAT、头部咨询公司的资深技术和运营专家，拥有深厚的行业积累。
            </p>
            <p style={{ color: '#4a5568', lineHeight: 1.9, fontSize: '15px', marginBottom: '32px' }}>
              公司核心产品——<strong style={{ color: '#0f4c81' }}>Claw Skills 技能包体系</strong>，涵盖推广提效、流量诊断、
              选品决策、用户增长等多个维度，帮助企业实现数据驱动的精准运营，
              服务超过500家各行业头部客户。
            </p>
            <button
              onClick={() => onNavigate('about')}
              style={{
                padding: '12px 28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0f4c81, #00a8e8)',
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              了解更多 →
            </button>
          </div>

          {/* Visual card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0a3460, #1a6bc0)',
              borderRadius: '20px',
              padding: '40px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '200px', height: '200px',
                borderRadius: '50%',
                background: 'rgba(0,168,232,0.2)',
              }}/>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌐</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>我们的使命</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '14px' }}>
                  让每一家企业都能够用数据说话，让每一次营销决策都有科学依据。
                  我们用技术的力量，为企业创造可持续增长的商业价值。
                </p>
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['AI驱动', '数据赋能', '精准营销', '智能分析'].map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(0,168,232,0.3)',
                      border: '1px solid rgba(0,168,232,0.5)',
                      padding: '4px 12px', borderRadius: '16px',
                      fontSize: '12px', color: '#33bff0'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating stats */}
            <div style={{
              position: 'absolute', bottom: '-16px', left: '-16px',
              background: 'white',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #00a8e8, #0f4c81)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>📊</div>
              <div>
                <div style={{ fontWeight: 700, color: '#0a3460', fontSize: '20px' }}>500+</div>
                <div style={{ color: '#718096', fontSize: '12px' }}>服务企业客户</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '96px 48px', background: '#f7f9fc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#00a8e8', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', marginBottom: '8px' }}>
              CORE FEATURES
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0a3460' }}>核心能力</h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0f4c81, #00a8e8)', borderRadius: '2px', margin: '16px auto 0' }}/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {features.map((f, i) => (
              <div key={i} className="card-hover" style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px 24px',
                border: '1px solid #e2e8f0',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0a3460', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ color: '#718096', fontSize: '13px', lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '96px 48px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0a3460' }}>企业价值观</h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0f4c81, #00a8e8)', borderRadius: '2px', margin: '16px auto 0' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {coreValues.map((v, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #f7f9fc, white)',
                border: '1px solid #e2e8f0',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
              >
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0f4c81, #00a8e8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', margin: '0 auto 16px',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0a3460', marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ color: '#718096', fontSize: '13px', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 48px',
        background: 'linear-gradient(135deg, #0a3460, #1a6bc0)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            准备好开启数字化转型之旅？
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
            联系我们的专业团队，获取定制化的数字营销解决方案，让数据为您的业务增长赋能。
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                padding: '14px 36px',
                borderRadius: '8px',
                background: '#00a8e8',
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 16px rgba(0,168,232,0.4)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              立即免费咨询
            </button>
            <button
              onClick={() => onNavigate('products')}
              style={{
                padding: '14px 36px',
                borderRadius: '8px',
                background: 'transparent',
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                border: '2px solid rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              }}
            >
              浏览产品服务
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a1628',
        color: 'rgba(255,255,255,0.6)',
        padding: '40px 48px',
        textAlign: 'center',
        fontSize: '13px',
      }}>
        <div style={{ marginBottom: '8px', color: 'white', fontWeight: 600 }}>上海辰月数据科技有限公司</div>
        <div>© 2026 CHENGYUE DATA TECHNOLOGY CO., LTD. All rights reserved.</div>
        <div style={{ marginTop: '8px' }}>地址：上海市浦东新区张江高科技园区</div>
      </footer>
    </div>
  )
}
