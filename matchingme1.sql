-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 05, 2019 lúc 01:41 PM
-- Phiên bản máy phục vụ: 10.1.33-MariaDB
-- Phiên bản PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `matchingme1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `class`
--

CREATE TABLE `class` (
  `Id_class` int(5) NOT NULL,
  `Class_name` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `class`
--

INSERT INTO `class` (`Id_class`, `Class_name`) VALUES
(1, 'Primary'),
(2, 'College'),
(3, 'High school');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `degree`
--

CREATE TABLE `degree` (
  `Id_degree` int(5) NOT NULL,
  `Degree_name` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `degree`
--

INSERT INTO `degree` (`Id_degree`, `Degree_name`) VALUES
(1, 'Student'),
(2, 'Bachelor'),
(3, 'Master'),
(4, 'PhD');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feedback`
--

CREATE TABLE `feedback` (
  `id` int(100) NOT NULL,
  `type` text COLLATE utf8mb4_unicode_ci,
  `content` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `feedback`
--

INSERT INTO `feedback` (`id`, `type`, `content`) VALUES
(1, 'Khiếu nại', 'Không nhận được thông tin của gia sư sau khi chấp nhận kết nối'),
(8, 'Nh?n l?p', 'Nh?n l?p id 1'),
(9, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(10, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(11, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(12, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(13, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(14, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(15, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(16, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(17, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(18, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(19, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(20, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(21, 'Nh?n l?p', 'User: undefinednh?n l?p 1'),
(22, 'Nh?n l?p', 'User: 6nh?n l?p 1'),
(23, 'Nh?n l?p', 'User: 6nh?n l?p 1'),
(24, 'Request Recieve', 'User id: 6 request recieve post id 1'),
(25, 'Request Recieve', 'User id: 6 request recieve post id: 3'),
(26, 'Request Recieve', 'User id: 6 request recieve post id: 2'),
(30, 'Request Recieve', 'User id: 6 request recieve post id: 2'),
(31, 'Request Recieve', 'User id: 6 request recieve post id: 2'),
(32, 'Request Recieve', 'User id: 6 request recieve post id: 1'),
(33, 'Request Recieve', 'User id: 6 request recieve post id: 1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(34),
(34);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mailbox`
--

CREATE TABLE `mailbox` (
  `id` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `content` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `Id` int(20) NOT NULL,
  `Type` enum('FindTutor','FindHost') COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_User` int(20) NOT NULL,
  `Address_area` text COLLATE utf8mb4_unicode_ci,
  `Address_detail` text COLLATE utf8mb4_unicode_ci,
  `SessionsPerWeek` int(2) DEFAULT '0',
  `Id_Class` int(5) DEFAULT NULL,
  `Id_Subject` int(5) DEFAULT NULL,
  `PhoneNumber` int(11) DEFAULT '0',
  `Salary` int(7) DEFAULT '0',
  `Title` text COLLATE utf8mb4_unicode_ci,
  `Description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci,
  `Status` tinyint(1) NOT NULL DEFAULT '0',
  `Id_Province` varchar(5) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT '1',
  `Id_District` varchar(5) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT '1',
  `Id_Town` varchar(5) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT '1',
  `Id_Degree` int(5) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`Id`, `Type`, `Id_User`, `Address_area`, `Address_detail`, `SessionsPerWeek`, `Id_Class`, `Id_Subject`, `PhoneNumber`, `Salary`, `Title`, `Description`, `Status`, `Id_Province`, `Id_District`, `Id_Town`, `Id_Degree`) VALUES
(1, 'FindHost', 4, 'An Nhơn, Bình Định', '78 An Dương Vương, thị trấn Bình Định', 0, 3, 1, 974586325, 1000000, 'Cần tìm học sinh học Toán ở khu vực thị xã An Nhơn', 'Học sinh học lực trung bình trở lên', 0, '01', '001', '00001', 1),
(2, 'FindTutor', 6, 'Quy Nhơn, Bình Định', '123 Hùng Vương', 0, 2, 6, 974123458, 2000000, 'Tìm gia sư nữ đã tốt nghiệ,p dạy Toán Văn lớp 3', 'Yêu cầu nhiệt tình', 0, '02', '002', '00004', 2),
(3, 'FindTutor', 6, 'Quy Nhơn', '147 Hùng Vương', 3, 3, 4, 974586325, 100000, 'Tìm gia sư môn Lý lớp 9', 'Nhanh nhẹn, trung thực', 0, NULL, NULL, NULL, NULL),
(4, 'FindTutor', 5, 'Tuy Phước', '70 Lê Hồng Phong, thị trấn Diêu Trì', 2, 3, 6, 974586325, 80000, 'Cần gia sư dạy Văn', NULL, 0, NULL, NULL, NULL, NULL),
(5, 'FindHost', 2, 'Quy Nhơn', '152 Trần Hưng Đạo', 3, 3, 1, 974586325, 50000, 'Cần thêm 3 học sinh để mở lớp dạy Hóa ở Quy Nhơn', NULL, 0, NULL, NULL, NULL, NULL),
(7, 'FindHost', 6, 'Tuy Hòa, Phú Yên', '78 đường An Dương Vương', 3, 3, 7, 974586325, 1000000, 'Cần tìm 1 học sinh học Tiếng Anh Tuy Hòa Phú Yên', 'Học sinh học lực trung bình trở lên', 1, '01', '1', '1', 1),
(27, 'FindHost', 6, NULL, '', 5, 0, 7, 0, 100000, 'tìm h?c sinh ti?u h?c', 'Không có', 0, '1', '1', '1', 1),
(29, 'FindTutor', 6, NULL, '5', 3, 2, 4, 0, 100000, 'aaa', '6', 0, '1', '1', '1', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `right`
--

CREATE TABLE `right` (
  `Id_right` int(5) NOT NULL,
  `Right_code` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `Right_name` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `Describle` text COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `right`
--

INSERT INTO `right` (`Id_right`, `Right_code`, `Right_name`, `Describle`) VALUES
(1, '1', 'Admin', 'full'),
(2, '2', 'Tutor', 'post'),
(3, '3', 'Host', 'pp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subject`
--

CREATE TABLE `subject` (
  `Id_subject` int(5) NOT NULL,
  `Subject_name` text COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `subject`
--

INSERT INTO `subject` (`Id_subject`, `Subject_name`) VALUES
(1, 'Toán'),
(2, 'Java'),
(4, 'Lý'),
(5, 'Hóa'),
(6, 'Văn'),
(7, 'Ngoại ngữ(Anh)');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `Id` int(20) NOT NULL,
  `Username` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `Password` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `Name` text COLLATE utf8_vietnamese_ci NOT NULL,
  `Id_right` int(5) NOT NULL,
  `Birthday` date DEFAULT NULL,
  `Email` text COLLATE utf8_vietnamese_ci,
  `Facebook` text COLLATE utf8_vietnamese_ci,
  `Phone` int(12) DEFAULT NULL,
  `Id_card` int(12) DEFAULT NULL,
  `Gender` enum('Female','Male') COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Id_degree` int(5) DEFAULT NULL,
  `Address` text COLLATE utf8_vietnamese_ci,
  `Id_province` varchar(5) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Id_district` varchar(5) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Id_town` varchar(5) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Money_amount` float DEFAULT NULL,
  `Status` text COLLATE utf8_vietnamese_ci,
  `Description` text COLLATE utf8_vietnamese_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`Id`, `Username`, `Password`, `Name`, `Id_right`, `Birthday`, `Email`, `Facebook`, `Phone`, `Id_card`, `Gender`, `Id_degree`, `Address`, `Id_province`, `Id_district`, `Id_town`, `Money_amount`, `Status`, `Description`) VALUES
(1, 'Admin', '123', 'Huệ', 1, '1997-07-24', 'minhhuephucat@gmail.', 'jfdhdf', 1678873076, 13246587, 'Female', 2, NULL, '15', '021', '00022', 100000, NULL, NULL),
(2, 'Hermine', '123456', 'Hermione Granger', 2, '1978-06-28', 'hermijean@gmail.com', 'Hermione Nguyen', 212534, 1234235, 'Female', 2, NULL, '22', '1', '7', 0, NULL, NULL),
(3, 'Hermione', '123456', 'Hermione Granger', 3, '2018-06-04', 'hean@gmail.com', 'Hermione Nguyen', 212534, 1234235, 'Female', 2, NULL, '22', '1', '7', 0, NULL, NULL),
(4, 'giasu', '123', 'Nguyễn Thị Cám', 2, '1999-03-03', 'camcongchua@yahoo.com', 'https://www.facebook.com/Cam123', 123456789, 123456789, 'Male', 1, NULL, '01', '001', '00001', 0, NULL, NULL),
(5, 'giasu123', '123', 'Nguyễn Thị Cám', 2, '1999-03-03', 'camcongchua@yahoo.com', 'https://www.facebook.com/Cam123', 123456789, 123456789, 'Male', 1, NULL, '1', '1', '1', 0, NULL, NULL),
(6, 'Luli', '123', 'DUONG LULI', 3, '1997-07-24', 'td@gmail.com', 'https://facebook.com/duong.7241', 1678873076, 215452214, 'Female', 2, NULL, '52', '540', '21553', 100000, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`Id_class`);

--
-- Chỉ mục cho bảng `degree`
--
ALTER TABLE `degree`
  ADD PRIMARY KEY (`Id_degree`);

--
-- Chỉ mục cho bảng `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `mailbox`
--
ALTER TABLE `mailbox`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `post_subject` (`Id_Subject`),
  ADD KEY `post_user` (`Id_User`);

--
-- Chỉ mục cho bảng `right`
--
ALTER TABLE `right`
  ADD PRIMARY KEY (`Id_right`);

--
-- Chỉ mục cho bảng `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`Id_subject`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`Username`),
  ADD KEY `user_right` (`Id_right`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `class`
--
ALTER TABLE `class`
  MODIFY `Id_class` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `degree`
--
ALTER TABLE `degree`
  MODIFY `Id_degree` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `mailbox`
--
ALTER TABLE `mailbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `right`
--
ALTER TABLE `right`
  MODIFY `Id_right` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `subject`
--
ALTER TABLE `subject`
  MODIFY `Id_subject` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_right` FOREIGN KEY (`Id_right`) REFERENCES `right` (`Id_right`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
