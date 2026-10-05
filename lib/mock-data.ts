export const academyConfig = { name: 'Al-Noor Coaching Academy' }

export type Student = { id: number; name: string; className: string; guardian: string; phone: string; present: boolean }
export type Fee = { id: number; student: string; className: string; amount: number; dueDate: string; status: 'Paid' | 'Pending' | 'Overdue' }

const names = ['Ayesha Khan','Muhammad Hamza','Fatima Zahra','Ali Raza','Hira Siddiqui','Usman Tariq','Maham Iqbal','Abdullah Ahmed','Zainab Noor','Saad Malik','Eman Fatima','Hassan Nawaz','Laiba Asif','Bilal Sheikh','Mariam Javed','Omar Farooq','Areeba Shah','Daniyal Butt','Sana Yousaf','Talha Imran']
const guardians = ['Nadia Khan','Imran Ahmed','Sadia Raza','Farooq Siddiqui','Shazia Tariq']
export const students: Student[] = Array.from({ length: 120 }, (_, index) => ({
  id: index + 1,
  name: names[index % names.length] + (index >= names.length ? ` ${Math.floor(index / names.length) + 1}` : ''),
  className: String(9 + (index % 4)), guardian: guardians[index % guardians.length], phone: `030${String(10000000 + index).slice(-8)}`, present: index % 11 !== 0,
}))
export const fees: Fee[] = students.slice(0, 18).map((student, index) => ({ id: student.id, student: student.name, className: student.className, amount: [8500, 10000, 12000][index % 3], dueDate: `0${(index % 8) + 1} Oct 2026`, status: index % 5 === 0 ? 'Overdue' : index % 3 === 0 ? 'Pending' : 'Paid' }))
export const revenue = [{ month: 'May', value: 62 }, { month: 'Jun', value: 74 }, { month: 'Jul', value: 68 }, { month: 'Aug', value: 84 }, { month: 'Sep', value: 79 }, { month: 'Oct', value: 91 }]
export const activities = [{ text: 'Fee received from Ayesha Khan', meta: 'PKR 10,000 · 12 min ago' }, { text: 'Attendance submitted for Class 10', meta: '28 present · 1 hour ago' }, { text: 'Test results sent to Class 12 parents', meta: '24 recipients · 3 hours ago' }, { text: 'New student enrolled in Class 9', meta: 'Muhammad Huzaifa · Yesterday' }]
export const formatPKR = (amount: number) => `PKR ${amount.toLocaleString('en-PK')}`

export const marks = students.slice(0, 8).map((student, index) => ({ ...student, score: [88, 76, 94, 81, 69, 87, 73, 91][index] }))

export const navItems = [{ key: 'dashboard', label: 'Overview', icon: 'LayoutDashboard' }, { key: 'attendance', label: 'Attendance', icon: 'CalendarCheck' }, { key: 'fees', label: 'Fees', icon: 'ReceiptText' }, { key: 'marks', label: 'Test Marks', icon: 'ChartNoAxesColumnIncreasing' }] as const
export type PageKey = typeof navItems[number]['key']

export const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TribeTrend-LQ736ClWixaPjvCYx1zuAgO9ca05vy.png'
export const today = '05 Oct 2026'

export const getAttendanceMessage = (student: string, className: string, language: 'en' | 'ur') => language === 'ur' ? `محترم والدین، ${student} آج ${className} میں غیر حاضر تھے، ${today}۔ - ${academyConfig.name}` : `Dear Parent, ${student} was absent from ${className} today, ${today}. - ${academyConfig.name}`

export const getRank = (score: number) => score >= 90 ? 1 : score >= 85 ? 2 : score >= 80 ? 3 : score >= 75 ? 4 : score >= 70 ? 5 : 6

export const stats = [{ label: 'Total Students', value: '120', change: '+8.2%', note: 'vs last month' }, { label: 'Collected This Month', value: 'PKR 9.84L', change: '+12.4%', note: 'vs last month' }, { label: 'Pending Dues', value: 'PKR 2.16L', change: '14 students', note: 'need follow-up' }, { label: 'Attendance Today', value: '94.2%', change: '+2.1%', note: 'vs last week' }]

export const classOptions = ['9', '10', '11', '12']
export const statusOptions = ['All statuses', 'Paid', 'Pending', 'Overdue']

export const reportDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

export const defaultTestName = 'Mid-Term Mathematics'

export const getStudentById = (id: number) => students.find((student) => student.id === id)

export const getAbsentStudents = (items: Student[]) => items.filter((student) => !student.present)

export const recentMonth = 'October 2026'

export const receiptNumber = (id: number) => `NT-${today.replaceAll(' ', '')}-${String(id).padStart(3, '0')}`

export const tableStudentCount = 8

export const feeClasses = Array.from(new Set(fees.map((fee) => fee.className)))

export const maxBar = Math.max(...revenue.map((item) => item.value))

export const pageTitles: Record<PageKey, { title: string; description: string }> = { dashboard: { title: 'Good morning, Aamir', description: `${academyConfig.name} · Monday, ${today}` }, attendance: { title: 'Attendance', description: 'Keep parents in the loop, every day.' }, fees: { title: 'Fee collection', description: 'Track dues and keep cash flow healthy.' }, marks: { title: 'Test marks', description: 'Record scores and share progress with parents.' } }

export const initialClass = '10'

export const chartData = revenue

export const currentUser = { name: 'Aamir Raza', role: 'Owner', initials: 'AR' }

export const dashboardMessage = 'Your academy is running smoothly.'

export const listPreview = students.slice(0, 10)

export const feePreview = fees.slice(0, 10)

export const markPreview = marks

export const currentDateValue = '2026-10-05'

export const inputDateLabel = '05 October 2026'

export const sections = ['Operations', 'Insights']

export const operationItems = navItems

export const insightItems = [{ key: 'reports', label: 'Reports', icon: 'FileBarChart' }] as const

export const navIconNames = ['LayoutDashboard', 'CalendarCheck', 'ReceiptText', 'ChartNoAxesColumnIncreasing', 'FileBarChart'] as const

export const supportedLanguages = ['en', 'ur'] as const

export type Language = typeof supportedLanguages[number]

export const reminderText = 'Fee reminder'

export const submitText = 'Submit and notify parents'

export const emptyStateText = 'No records found'

export const academyShortName = 'Al-Noor'

export const studentTotal = students.length

export const pendingFeeTotal = fees.filter((fee) => fee.status !== 'Paid').reduce((sum, fee) => sum + fee.amount, 0)

export const paidFeeTotal = fees.filter((fee) => fee.status === 'Paid').reduce((sum, fee) => sum + fee.amount, 0)

export const attendanceRate = Math.round((students.filter((student) => student.present).length / students.length) * 1000) / 10

export const classLabel = (className: string) => `Class ${className}`

export const testLabel = 'Mid-Term Mathematics'

export const roleLabel = 'Academy owner'

export const sidebarFooterLabel = 'Powered by'

export const reportLabel = 'Academic year 2026'

export const brandAccent = '#4CAF3A'

export const overdueAccent = '#E5484D'

export const cardBackground = '#161616'

export const appBackground = '#0F0F0F'

export const borderColor = '#262626'

export const mutedColor = '#A1A1A1'

export const dashboardStatNote = 'Updated just now'

export const dashboardActivityTitle = 'Recent activity'

export const defaulterTitle = 'Top defaulters'

export const defaulterItems = fees.filter((fee) => fee.status !== 'Paid').slice(0, 5)

export const chartTitle = 'Revenue collected'

export const chartSubtitle = 'Last 6 months'

export const attendanceAbsentCopy = (count: number) => `${count} absent today`

export const reportSuccessCopy = 'Results sent successfully'

export const receiptSuccessCopy = 'Receipt generated'

export const noResultsCopy = 'No students match your filters.'

export const appName = 'Coaching Ops'

export const loginCopy = 'Run your academy with clarity.'

export const loginEmail = 'owner@alnoor.edu.pk'

export const loginPassword = '••••••••'

export const sidebarTagline = 'Academy operations, simplified.'

export const currentMonth = 'October'

export const locale = 'en-PK'

export const defaultToast = 'Action completed'

export const toastDuration = 2400

export const brandImageAlt = 'Tribe and Trend logo'

export const footerImageAlt = 'Tribe and Trend'

export const navAriaLabel = 'Primary navigation'

export const modalTitle = 'WhatsApp preview'

export const receiptTitle = 'Payment receipt'

export const reminderTitle = 'Fee reminder'

export const marksTitle = 'Test results'

export const submitAttendanceTitle = 'Attendance notification'

export const compactDate = '05 Oct'

export const paidLabel = 'Paid'

export const pendingLabel = 'Pending'

export const overdueLabel = 'Overdue'

export const searchPlaceholder = 'Search students...'

export const allClassesLabel = 'All classes'

export const allStatusesLabel = 'All statuses'

export const overviewKey = 'dashboard'

export const footerCopy = 'Building better learning communities.'

export const versionLabel = 'v1.0.0'

export const topDefaulterAction = 'Remind'

export const markPaidAction = 'Mark paid'

export const sendReceiptAction = 'Send receipt'

export const submitResultsAction = 'Send results to parents'

export const presentLabel = 'Present'

export const absentLabel = 'Absent'

export const englishLabel = 'English'

export const urduLabel = 'اردو'

export const sentLabel = 'Sent'

export const doubleTick = '✓✓'

export const defaultRoute = 'dashboard'

export const mobileTabLabel = 'Menu'

export const endOfFile = true
