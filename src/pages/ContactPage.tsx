import { useState } from 'react'
import type { PageType } from '../App'

interface ContactPageProps {
  onNavigate: (page: PageType) => void
}

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: '📍',
      title: '公司地址',
      content: '上海市浦东新区张江高科技园区\n科苑路399号9号楼3层',
      color: '#0f4c81',
    },
    {
      icon: '📞',
      title: '联系电话',
      content: '400-888-9999\n（工作日 9:00-18:00）',
      color: '#059669',
    },
    {
      icon: '✉️',
      title: '电子邮件',
      content: 'bd@chengyue-tech.com\nsupport@chengyue-tech.com',
      color: '#7c3aed',
    },
    {
      icon: '💬',
      title: '微信客服',
      content: 'chengyue_service\n（扫码添加企业微信）',
      color: '#d97706',
    },
  ]

  const serviceOptions = [
    '推广提效技能包',
    '流量诊断技能包',
    '选品决策技能包',
    '用户增长技能包',
    '数据智能技能包',
    '内容营销技能包',
    '定制化解决方案',
    '其他咨询',
  ]

  const faqs = [
    {
      q: '技能包是否支持试用？',
      a: '是的，我们为每位新客户提供14天的免费试用期，让您在正式使用前充分体验产品价值。',
    },
    {
      q: '技能包是否需要对接现有系统？',
      a: '我们提供开放的API接口，支持与主流电商平台、CRM、ERP系统无缝对接，专业团队提供全程技术支持。',
    },
    {
      q: '如何选择适合我们的技能包？',
      a: '您可以联系我们的解决方案顾问，我们将根据您的业务阶段、痛点和目标，为您推荐最合适的技能包组合。',
    },
    {
      q: '数据安全如何保障？',
      a: '我们通过ISO 27001信息安全管理体系认证，采用银行级数据加密标准，并严格遵守数据合规要求，确保客户数据安全。',
    },
  ]

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
          backgroundImage: `radial-gradient(circle at 80% 50%, rgba(0,168,232,0.2) 0%, transparent 60%)`,
        }}/>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#33bff0', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
            CONTACT US
          </div>
          <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>联系我们</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8 }}>
            让我们的专业团队为您量身定制数字化解决方案，开启增长新旅程
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'start' }}>
          {/* Left: Contact info */}
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0a3460', marginBottom: '8px' }}>
              与我们取得联系
            </h2>
            <div className="section-divider"/>
            <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.8, marginBottom: '32px' }}>
              无论您有任何问题或需求，我们的专业顾问团队将在24小时内响应您的咨询。
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {contactInfo.map((info, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: '10px',
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0a3460', fontSize: '14px', marginBottom: '6px' }}>
                      {info.title}
                    </div>
                    <div style={{ color: '#718096', fontSize: '13px', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                      {info.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              background: 'linear-gradient(135deg, #e8f0fc, #f0f7ff)',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4a5568',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🗺️</div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>上海张江高科技园区</div>
              <div style={{ fontSize: '12px', color: '#718096', marginTop: '4px' }}>科苑路399号9号楼</div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '64px 48px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a3460', marginBottom: '12px' }}>
                  提交成功！
                </h3>
                <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8 }}>
                  感谢您的咨询，我们的专业顾问将在 <strong>24小时内</strong> 联系您。
                  期待与您的合作！
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '28px',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #0f4c81, #00a8e8)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  再次提交
                </button>
              </div>
            ) : (
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0a3460', marginBottom: '8px' }}>
                  预约免费咨询
                </h2>
                <p style={{ color: '#718096', fontSize: '13px', marginBottom: '28px' }}>
                  填写以下信息，专属顾问将主动联系您
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#4a5568', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                        您的姓名 <span style={{ color: '#e11d48' }}>*</span>
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="请输入姓名"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#4a5568', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                        公司名称 <span style={{ color: '#e11d48' }}>*</span>
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="请输入公司名称"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#4a5568', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                        联系电话 <span style={{ color: '#e11d48' }}>*</span>
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        placeholder="请输入手机号"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#4a5568', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                        电子邮箱
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="请输入邮箱"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', color: '#4a5568', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                      感兴趣的服务
                    </label>
                    <select
                      className="form-input"
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">请选择感兴趣的技能包</option>
                      {serviceOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', color: '#4a5568', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                      需求描述
                    </label>
                    <textarea
                      className="form-input"
                      placeholder="请简单描述您的业务痛点或需求（可选）"
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      style={{ resize: 'vertical', minHeight: '100px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '8px',
                      background: submitting
                        ? '#94a3b8'
                        : 'linear-gradient(135deg, #0f4c81, #00a8e8)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '15px',
                      border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      transition: 'opacity 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.3"/>
                          <path d="M21 12a9 9 0 00-9-9"/>
                        </svg>
                        提交中...
                      </>
                    ) : '立即预约免费咨询 →'}
                  </button>

                  <p style={{ color: '#94a3b8', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
                    提交即表示您同意我们的隐私政策，我们承诺不会泄露您的个人信息
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#0a3460' }}>常见问题</h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0f4c81, #00a8e8)', borderRadius: '2px', margin: '16px auto 0' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                }}>
                  <div style={{
                    width: '28px', height: '28px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #0f4c81, #00a8e8)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '13px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>Q</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0a3460', fontSize: '14px', marginBottom: '10px', lineHeight: 1.5 }}>
                      {faq.q}
                    </div>
                    <div style={{ color: '#718096', fontSize: '13px', lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
        <div style={{ marginTop: '8px' }}>地址：上海市浦东新区张江高科技园区科苑路399号</div>
      </footer>
    </div>
  )
}
