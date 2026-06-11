import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { FeatureCard } from '../../../shared/components/FeatureCard';

const features = [
  {
    title: 'Chat realtime',
    description: 'Trao đổi nhanh giữa các phòng ban, nhóm dự án và cá nhân.',
    icon: <ChatBubbleOutlineIcon />,
  },
  {
    title: 'Quản lý workspace/task',
    description: 'Tổ chức không gian làm việc, backlog và tiến độ công việc.',
    icon: <ChecklistOutlinedIcon />,
  },
  {
    title: 'Quản lý thành viên',
    description: 'Phân quyền, mời thành viên và theo dõi vai trò trong dự án.',
    icon: <GroupsOutlinedIcon />,
  },
  {
    title: 'Lưu trữ tài liệu',
    description: 'Quản lý file, tài liệu và chia sẻ nội dung nội bộ an toàn.',
    icon: <DescriptionOutlinedIcon />,
  },
  {
    title: 'Báo cáo',
    description: 'Theo dõi hiệu suất, trạng thái dự án và dữ liệu vận hành.',
    icon: <AssessmentOutlinedIcon />,
  },
];

export function HomePage(): JSX.Element {
  return (
    <Stack spacing={4}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          border: '1px solid rgba(15, 23, 42, 0.08)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)',
        }}
      >
        <Stack spacing={3}>
          <Typography variant="overline" color="primary.main" sx={{ letterSpacing: 2 }}>
            Workplace Collaboration Platform
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 760 }}>
            Khung nền tảng cộng tác nội bộ cho chat, tài liệu, task và báo cáo.
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760, fontWeight: 400 }}>
            Đây là scaffold ban đầu để phát triển ứng dụng fullstack theo kiến trúc feature-based ở frontend và clean architecture ở backend.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large">
              Xem roadmap
            </Button>
            <Button variant="outlined" size="large">
              Kết nối backend
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <Box>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Các module chính
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid key={feature.title} item xs={12} sm={6} md={4}>
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}