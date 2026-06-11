# Workplace Collaboration

Khung khởi tạo cho ứng dụng cộng tác nội bộ của công ty.

## Cấu trúc hiện tại

- `backend`: NestJS, MongoDB, clean architecture
- `frontend`: React, Material UI, feature-based architecture

## Chạy dự án

1. Cài dependency riêng cho từng phần:
   - `cd backend && npm install`
   - `cd frontend && npm install`
2. Tạo file môi trường cho backend từ `.env.example`.
3. Chạy backend bằng `npm run start:dev`.
4. Chạy frontend bằng `npm run dev`.

## Bước tiếp theo đề xuất

- Tạo module xác thực và phân quyền
- Tạo schema MongoDB cho workspace, task, member, document, report
- Kết nối frontend với backend qua API base layer
