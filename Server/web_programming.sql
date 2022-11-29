-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2022 lúc 08:39 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `web_programming`
--
CREATE DATABASE IF NOT EXISTS `web_programming` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `web_programming`;
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`ID`, `title`) VALUES
(1, 'Laptop'),
(2, 'PC'),
(3, 'Điện thoại'),
(4, 'Phụ kiện');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `ID` int(11) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time_up` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `ID` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time_up` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`ID`, `title`, `content`, `thumbnail`, `time_up`) VALUES
(1, 'World Cup 2022 ứng dụng những công nghệ mới nào?', 'World Cup 2022 tại Qatar có lẽ là kỳ World Cup chứa đựng rất nhiều điều đặc biệt khiến khán giả trên toàn thế giới phải nhớ đến sự kiện này. Không chỉ được tổ chức vào mùa đông thay vì vào mùa hè mà ngày hội bóng đá này còn có một số tiền đầu tư khổng lồ lên đến 220 tỷ USD, vượt xa so với những kỳ World Cup trước đây. \r\n\r\nKhoản tiền “tấn” này cùng với thời gian chuẩn bị lên đến 10 năm giúp cho quy mô của sự kiện bóng đá lớn nhất hành tinh 2022 là vô cùng hoành tráng, đồng thời cũng được trang bị rất nhiều công nghệ độc đáo và mới mẻ chưa từng được biết đến trước đây. Vậy hãy cùng Phong Vũ khám phá xem World Cup 2022 Qatar có những công nghệ gì mà khiến cả thế giới phải sục sôi như thế nhé! ', 'https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2022/11/cong-nghe-san-van-dong-world-cup-2022-1024x465-1-300x300.jpg', '2022-11-15'),
(2, 'Review tai nghe Logitech G435: tai nghe không dây siêu nhẹ, dưới 2 triệu', 'Logitech, hãng phụ kiện các thiết bị vi tính đã quá quen thuộc với các anh em đam mê công nghệ trên toàn thế giới với những sản phẩm nổi tiếng là bền bỉ và thiết kế đẹp mắt. Tiếp tục truyền thống của mình, chiếc tai nghe Logitech G435 với trọng lượng siêu nhẹ và thiết kế vô cùng bắt mắt là một mẫu tai nghe gaming rất đa dụng thích hợp cho cả những nhu cầu chơi game và sử dụng hằng ngày.\r\n\r\nVậy hãy cùng mình đánh giá chi tiết chiếc Tai nghe không dây Logitech G435 này để xem nó có xứng đáng với danh xưng tai nghe “dân chơi” thứ thiệt dành cho giới trẻ hay không nhé! ', 'https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2022/11/tai-nghe-logitech-g435-300x300.jpg', '2022-11-15'),
(3, 'iOS 16.2: dự kiến ra mắt tháng 12 với 8 tính năng mới', 'Sau khi bản cập nhật iOS 16 và 16.1 ra mắt, phiên bản iOS 16.2 sắp tới của Apple dự kiến sẽ ra mắt chính thức vào tháng 12 với 8 tính năng mới đáng chú ý. Trong đó việc thêm tùy chọn cho AOD (Always-on Display) được nhiều anh em nói vui là học theo Android cho những tùy chọn mới. Tính năng nào cũng được, miễn là có lợi cho người dùng và anh em thích là được, theo dõi thêm những thông tin cập nhật mới nhé.', 'https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2022/11/iOS-16-2-300x300.jpeg', '2022-11-15'),
(4, 'Logo Apple phát sáng có thể trở lại trên MacBook 2023 ?', 'Theo một vài thông tin về việc Apple đã đăng ký bằng sáng chế cho một tấm gương phản chiếu có đèn nền vào tháng 5.2022 và nó được cho là có thể sẽ dùng để làm Logo quả táo. Tuy nó vẫn có thể sử dụng để làm ra một cấu trúc khác trong máy tuy nhiên tin đồn này cũng khiến những iFans cảm thấy thích thú.\r\n\r\nRất có thể những chiếc Macbook trong tương lai sẽ được trang bị logo quả táo với lớp phủ bằng gương và đèn nền phát sáng ở phía dưới, làm hồi sinh biểu tượng của những chiếc Macbook một thời. Không loại trừ khả năng Apple có thể tích hợp thêm nhiều tính năng mới, như sử dụng đèn nền của logo để thông báo khi có tin nhắn.\r\n\r\nHẳn nếu không phải fan táo thì anh em sẽ chẳng thể hiểu nổi việc nhiều người đang nói về một tính năng “logo sáng đèn” cũ kỹ và sắp đem ra “nhai lại”. Nhưng kể từ khi Apple ngừng làm một quả táo phát sáng từ năm 2015 đã có nhiều người tiếc nuối và luôn mong ngóng ngày nó trở lại.', 'https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2022/11/Macbook-300x300.jpg', '2022-11-15'),
(5, 'Telegram cập nhật nhiều tính năng mới cho tài khoản trả phí và miễn phí', 'Nếu xét về khía cạnh ứng dụng nhắn tin mã hóa bảo mật cao thì dường như Telegram không có bất cứ một đối nào dù phải chịu sự cạnh tranh khốc liệt từ Meta với Messenger, Apple với iMessage, hay Viber,…\r\n\r\nXuất phát điểm là một ứng dụng nhắn tin miễn phí nhưng vào tháng 6 năm nay thì Telegram cũng đã chính thức tung ra một phiên bản trả trí Premium với nhiều tính năng độc quyền. Không chỉ tập trung vào gói Premium, với các tài khoản miễn phí thì ứng dụng nhắn tin này cũng liên tục cập nhật cho họ những tính năng mới song song với các tài khoản Premium. ', 'https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2022/11/telegram-la-gi-300x300.png', '2022-11-15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `ID` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `status` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `total_cash` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`ID`, `order_date`, `status`, `total_cash`, `user_id`) VALUES
(1, '2022-11-15', 'Chưa thanh toán', 20900000, 5),
(2, '2022-11-15', 'Chưa thanh toán', 20900000, 5),
(3, '2022-11-15', 'Chưa thanh toán', 20900000, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_product`
--

CREATE TABLE `order_product` (
  `quantity` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `order_product`
--

INSERT INTO `order_product` (`quantity`, `order_id`, `product_id`) VALUES
(5, 1, 16),
(1, 2, 3),
(2, 3, 11);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `discount` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `attr` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`ID`, `title`, `price`, `name`, `description`, `thumbnail`, `discount`, `category_id`, `attr`) VALUES
(1, 'Laptop HP', 20890000, 'Laptop HP VICTUS 16-e0168AX (Ryzen 7 5800H/RAM 8GB/512GB SSD/ Windows 11)', 'Laptop HP VICTUS 16-e0168AX (4R0U6PA) sở hữu cấu hình mạnh mẽ, đáp ứng nhu cầu hiệu năng cao trong công việc và giải trí của nhiều người dùng. Nằm ở phân khúc cao cấp, chiếc laptop HP hứa hẹn sẽ mang đến cho bạn những trải nghiệm mượt mà ấn tượng, xứng đáng với sự đầu tư.', 'https://lh3.googleusercontent.com/7hF1me96OMiRq6Faqy5OoA9oyDFpDCDioWS5aBJuWmtPVH4MUAgN2DG_bKoRG5tn21y9vDl7qRZQTBg0spHB1IRI6tebA7Ee=w1000-rw', 0, 1, '{\"series\":  \"TUF Gaming\",\"partnum\": \"90NR09L3-M00510\",\"color\": \"Đen\",\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"cpugen\": \"Core i5 , Intel Core thế hệ thứ 12\",\"cpu\": \"Intel Core i5-12450H ( 2.0 GHz - 4.4GHz / 12MB / 8 nhân, 12 luồng ) i5-12450H\",\"gpu\": \"NVIDIA GeForce RTX 3060 6GB GDDR6\",\"ram\": \"16GB DDR4 3200MHz\",\"screen\": \"15.6inch IPS(1920 x 1080), 144Hz\",\"strorage\": \"512GB SSD\",\"os\": \"Windows 10 Home\",\"keyboard\": \"Backlit Keyboard\",\"pin\": \"3 Cell 51Wh\",\"weight\": \"2.2kg\"}\r\n'),
(2, 'Laptop Asus', 20890001, 'Laptop Asus TUF Gaming A15 FA506IHRB-HN080W', 'Laptop ASUS TUF Gaming A15 FA506IHRB-HN080W 90NR07G7-M007T0 sở hữu vẻ ngoài mạnh mẽ, cá tính với logo ASUS được đặt ở giữa cùng những đường nét thiết kế độc đáo. Laptop mang lại sự ấn tượng nhờ vào hiệu năng mạnh mẽ của CPU Ryzen 5 cùng card màn hình GTX 1650 4GB GDDR6 đáp ứng mọi nhu cầu sử dụng về cấu hình như chơi game hay các công việc liên quan đến đồ họa.', 'https://lh3.googleusercontent.com/S09qIzLbpS2GKRJ0iCXrABo9L6Fi5K5wX9kwRhRSqijHq-eLU45V2jyOjr8Az04RvR2lc3IxTlQed8govsoKGkdEbW-6ql4=w1000-rw', 0, 1, '{\"series\":  \"TUF Gaming\",\"partnum\": \"90NR09L3-M00510\",\"color\": \"Đen\",\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"cpugen\": \"Core i5 , Intel Core thế hệ thứ 12\",\"cpu\": \"Intel Core i5-12450H ( 2.0 GHz - 4.4GHz / 12MB / 8 nhân, 12 luồng ) i5-12450H\",\"gpu\": \"NVIDIA GeForce RTX 3060 6GB GDDR6\",\"ram\": \"16GB DDR4 3200MHz\",\"screen\": \"15.6inch IPS(1920 x 1080), 144Hz\",\"strorage\": \"512GB SSD\",\"os\": \"Windows 10 Home\",\"keyboard\": \"Backlit Keyboard\",\"pin\": \"3 Cell 51Wh\",\"weight\": \"2.2kg\"}\r\n'),
(3, 'Laptop ACER', 20890002, 'Laptop ACER Aspire 3 A315-58-54M5 (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)', 'Laptop Acer Aspire 3 A315-58-54M5 NX.ADDSV.00M Bạc được biết đến là một trong những dòng laptop cao cấp đến từ thương hiệu Acer. Chiếc laptop này sở hữu một vẻ ngoài thời thượng cùng hiệu năng hoạt động ổn định hứa hẹn sẽ chinh phục người dùng ngay từ những ánh nhìn đầu tiên', 'https://lh3.googleusercontent.com/_SApryKFms-BYshoOG9JRUG14-JLrnShoUSZ7_4_JqcYW5YaL2eRJ0cw4AXNjOmHDi1q-f-dVFH3BwyiCMxg-7-mAsKPGA-LcA=w1000-rw', 0, 1, '{\"series\":  \"TUF Gaming\",\"partnum\": \"90NR09L3-M00510\",\"color\": \"Đen\",\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"cpugen\": \"Core i5 , Intel Core thế hệ thứ 12\",\"cpu\": \"Intel Core i5-12450H ( 2.0 GHz - 4.4GHz / 12MB / 8 nhân, 12 luồng ) i5-12450H\",\"gpu\": \"NVIDIA GeForce RTX 3060 6GB GDDR6\",\"ram\": \"16GB DDR4 3200MHz\",\"screen\": \"15.6inch IPS(1920 x 1080), 144Hz\",\"strorage\": \"512GB SSD\",\"os\": \"Windows 10 Home\",\"keyboard\": \"Backlit Keyboard\",\"pin\": \"3 Cell 51Wh\",\"weight\": \"2.2kg\"}\r\n'),
(4, 'Laptop ACER', 20890003, 'Laptop ACER Nitro 5 Eagle AN515-57-54MV (i5-11400H/RAM 8GB/512GB SSD/ Windows 11)', 'Là dòng laptop gaming của thương hiệu Acer, laptop Acer Nitro 5 Eagle AN515-57-54MV được trang bị chip i5 mạnh mẽ, card đồ họa NVIDIA GeForce RTX 3050, ram 8Gb cùng dung lượng lớn. Kết hợp với thiết kế đẹp và mạnh mẽ, đây sẽ là sự lựa chọn dành cho các game thủ trẻ và người làm công việc liên quan đến đồ họa.', 'https://lh3.googleusercontent.com/c7VuA4P8sHHJCilfzRVp50AQmgZEkJOyOCuh4vvkcT9jxfqTzZVd2gepUFSSqzXVSEljnYlAN319sJD-H1IztNcxPT3UypA=w1000-rw', 0, 1, '{\"series\":  \"TUF Gaming\",\"partnum\": \"90NR09L3-M00510\",\"color\": \"Đen\",\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"cpugen\": \"Core i5 , Intel Core thế hệ thứ 12\",\"cpu\": \"Intel Core i5-12450H ( 2.0 GHz - 4.4GHz / 12MB / 8 nhân, 12 luồng ) i5-12450H\",\"gpu\": \"NVIDIA GeForce RTX 3060 6GB GDDR6\",\"ram\": \"16GB DDR4 3200MHz\",\"screen\": \"15.6inch IPS(1920 x 1080), 144Hz\",\"strorage\": \"512GB SSD\",\"os\": \"Windows 10 Home\",\"keyboard\": \"Backlit Keyboard\",\"pin\": \"3 Cell 51Wh\",\"weight\": \"2.2kg\"}\r\n'),
(5, 'Laptop MSI', 20890004, 'Laptop MSI Modern 15 A11M (i5-1155G7/RAM 8GB/512GB SSD/ Windows 11)', 'Laptop MSI Modern 15 A11M-1024VN (Xám) sở hữu hiệu năng mạnh mẽ đến từ bộ vi xử lý Core 5 thế hệ thứ 11. Với vẻ ngoài hoàn thiện cao cấp cùng thiết kế gọn nhẹ hiện đại của MSI hứa hẹn sẽ là sự lựa chọn đáng tin cậy với sự đầu tư để cùng bạn đồng hành trong công việc cũng như học tập hàng ngày. \r\nThiết kế màu xám đẳng cấp, nhỏ gọn dễ dàng mang theo', 'https://lh3.googleusercontent.com/AuqhERmRG5UzcXhYp4bksbuNkPecHQzTdlBN8COMmC866UWUcKE9P3DnEOFsWjB64G8UYAZJbrvpNgeec3M664cagmbuJXtt=w1000-rw', 0, 1, '{\"series\":  \"TUF Gaming\",\"partnum\": \"90NR09L3-M00510\",\"color\": \"Đen\",\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"cpugen\": \"Core i5 , Intel Core thế hệ thứ 12\",\"cpu\": \"Intel Core i5-12450H ( 2.0 GHz - 4.4GHz / 12MB / 8 nhân, 12 luồng ) i5-12450H\",\"gpu\": \"NVIDIA GeForce RTX 3060 6GB GDDR6\",\"ram\": \"16GB DDR4 3200MHz\",\"screen\": \"15.6inch IPS(1920 x 1080), 144Hz\",\"strorage\": \"512GB SSD\",\"os\": \"Windows 10 Home\",\"keyboard\": \"Backlit Keyboard\",\"pin\": \"3 Cell 51Wh\",\"weight\": \"2.2kg\"}\r\n'),
(6, 'PC HP', 20890000, 'Máy tính để bàn - PC HP AIO ProOne 400 G4 4YL93PA (23.8\" FHD/i3-8100T/4GB/1TB HDD/UHD 630/Free DOS)', 'HP AIO ProOne 400 G4 4YL93PA là chiếc máy tính trọn bộ tầm trung của HP, sử dụng CPU Intel Core mới nhất và bộ nhớ DDR4 kèm theo màn hình chất lượng cao và thiết kế tích hợp vào trong màn hình, đem lại cho người dùng 1 bộ máy tính đơn giản nhưng vẫn rất mạnh mẽ.', 'https://lh3.googleusercontent.com/yb34vKZaJLbqhmvsxoNwS58KM90wqxLGYGL-G65oPjOZ--pNPf1EPhRd2M4nFDH4qXsLj6mfBZ9JkNw0VoGb=w1000-rw', 0, 2, '{\"partnum\": \"UX.VQVSI.143\",\"color\": \"Đen\",\"cpuserries\": \"Pentium\",\"cpugen\": \"i5-12450H\",\"cpugen\": \"Intel Pentium G\",\"cpu\": \"Intel Pentium G5400 ( 3.70 GHz / 4MB / 2 nhân, 4 luồng )\",\"gpu\": \"Intel UHD Graphics 610\",\"ram\": \"1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )\",\"storage\": \", 1TB HDD 7200RPM\",\"os\": \"Windows 10 Home\"}'),
(7, 'PC ASUS', 20890000, 'PC ASUS V241E V241EAT-BA025W (23.8\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Không HDD/Windows 11 Home SL 64-bit/WiFi 802.11ac)', 'PC ASUS V241E V241EAT-BA025W là một bộ máy tính làm việc  văn phòng mà bạn không thể bỏ qua. PC có thiết kế sang trọng, nổi bật cùng hiệu năng ổn định hứa hẹn sẽ là một sản phẩm được nhiều người dùng yêu thích và lựa chọn.', 'https://lh3.googleusercontent.com/yX-qlfBWsFWQVuw7P5RBtZMXk1FkltB90BlLmbriu6zIZeyPw0skrLG-gbWTRGNQeewSTnqGNszRh9fAUUEUpuBv5JKRwPjN=w1000-rw', 0, 2, '{\"partnum\": \"UX.VQVSI.143\",\"color\": \"Đen\",\"cpuserries\": \"Pentium\",\"cpugen\": \"i5-12450H\",\"cpugen\": \"Intel Pentium G\",\"cpu\": \"Intel Pentium G5400 ( 3.70 GHz / 4MB / 2 nhân, 4 luồng )\",\"gpu\": \"Intel UHD Graphics 610\",\"ram\": \"1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )\",\"storage\": \", 1TB HDD 7200RPM\",\"os\": \"Windows 10 Home\"}'),
(8, 'PC HP', 20890000, 'PC HP AIO 24-cb1012d 6K7G9PA (23.8\" Full HD/Intel Core i5-1235U/8GB/512GB SSD/Không HDD/Windows 11 Home/WiFi 802.11ac)', 'Đang cập nhật', 'https://lh3.googleusercontent.com/ykIaIB9r31muKJeGG7pDq0Ue5QUyBDgfAobBYh2ZX4NsvoyLI1VgPf3sEvr47-SNgFT1gPWB6avoQZioAV-OKZqkOda5mFmrnA=w1000-rw', 0, 2, '{\"partnum\": \"UX.VQVSI.143\",\"color\": \"Đen\",\"cpuserries\": \"Pentium\",\"cpugen\": \"i5-12450H\",\"cpugen\": \"Intel Pentium G\",\"cpu\": \"Intel Pentium G5400 ( 3.70 GHz / 4MB / 2 nhân, 4 luồng )\",\"gpu\": \"Intel UHD Graphics 610\",\"ram\": \"1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )\",\"storage\": \", 1TB HDD 7200RPM\",\"os\": \"Windows 10 Home\"}'),
(9, 'PC Lenovo', 20890000, 'PC Lenovo Ideacentre 520 22ICB F0DT0058VN (21.5\"/i3-8100T/4GB/16GB Optane/1TB HDD/UHD 630/Win10)', 'Lenovo Ideacentre AIO 520 22ICB (F0DT0058VN) là sản phẩm máy bộ đến từ Lenovo, một thương hiệu sản xuất thiết bị điện tử đến được thành lập từ năm 1984 tại HongKong được nhiều người sử dụng biết đến với các sản phẩm như Laptop, Máy tính bảng, Smartphone được trang bị cấu hình mạnh mẽ nhưng lại sở hữu một mức giá hợp lý với đại đa số người sử dụng.', 'https://lh3.googleusercontent.com/JP8XIOXEja0nG4-kJFIpsdwQYiAOX7rs11x6okf_HHYbqmbEmRDfbd8DiWMk9iHwM5gFB-PZynqvwPhjs8I=w1000-rw', 0, 2, '{\"partnum\": \"UX.VQVSI.143\",\"color\": \"Đen\",\"cpuserries\": \"Pentium\",\"cpugen\": \"i5-12450H\",\"cpugen\": \"Intel Pentium G\",\"cpu\": \"Intel Pentium G5400 ( 3.70 GHz / 4MB / 2 nhân, 4 luồng )\",\"gpu\": \"Intel UHD Graphics 610\",\"ram\": \"1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )\",\"storage\": \", 1TB HDD 7200RPM\",\"os\": \"Windows 10 Home\"}'),
(10, 'PC ASUS', 20890000, 'PC ASUS A5401WRAT-BA020T 90PT0311-M07580 (23.8\" Full HD/Intel Core i5-10500T/8GB/512GB SSD/Không HDD/Windows 10 Home 64-bit/WiFi 802.11ax)', 'PC ASUS A5401WRAT-BA020T 90PT0311-M07580 có kiểu dáng độc đáo với hiệu năng mạnh mẽ khi được trang bị chip Intel thế hệ 10 cùng với ram và bộ nhớ trong dung lượng lớn. Đi kèm là bàn phím và chuột không dây mang lại sự tiện lợi cho người dùng trong các lĩnh vực nhà hàng, khách sạn, quán ăn…', 'https://lh3.googleusercontent.com/BZFy9EMDATnO_Wtz7GcOpOB3R13T_tgWiTqGvFxpNgMewYvYwwyUgwnnSOaRVis5mSCIPkwtaxHGeUfFpY0kE1fUbtF1qxw=w1000-rw', 0, 2, '{\"partnum\": \"UX.VQVSI.143\",\"color\": \"Đen\",\"cpuserries\": \"Pentium\",\"cpugen\": \"i5-12450H\",\"cpugen\": \"Intel Pentium G\",\"cpu\": \"Intel Pentium G5400 ( 3.70 GHz / 4MB / 2 nhân, 4 luồng )\",\"gpu\": \"Intel UHD Graphics 610\",\"ram\": \"1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )\",\"storage\": \", 1TB HDD 7200RPM\",\"os\": \"Windows 10 Home\"}'),
(11, 'Điện thoại Samsung Galaxy', 20890000, 'Điện thoại Samsung Galaxy Z Fold 4 12GB/256GB (GrayGreen) (SM-F936BZADXXV)', 'Đang cập nhật', 'https://lh3.googleusercontent.com/eMq0YT7g7j8_UHwdNXMt6N8uYMdvVNWXXU-f5MePPCfSQdzcmf0PI-myx3jMJJXEszcsAaZY2dxnIOR0tITBsKKBhxfXCZE=w1000-rw', 0, 3, '{\"series\": \"Blade\",\"color\": \"Gray Space Gray\",\"screen\": \"Màn hình giọt nước 6.52inch HD+\",\"rom\": \"64GB\",\"os\": \"Android\",\"ram\": \"8GB\",\"pin\": \"5000 mAh\",\"frontcam\": \"5MP\",\"backcam\": \"13MP, 2 x 2MP\",\"weight\": \"214g\"}'),
(12, 'Điện thoại Samsung Galaxy', 20890000, 'Điện thoại Samsung Galaxy A04s 4GB/64GB (Green) (SM-A047FZGGXXV)', 'Đang cập nhật', 'https://lh3.googleusercontent.com/RpVbhQ50NskSwRSxtHRK8uOZOMnQz2fmXseXUw4pqNGGrpisiouk3peRzANnz_WOHi5Vryv5jpFtYA-uJh5rpdcT66OmVIP_=w1000-rw', 0, 3, '{\"series\": \"Blade\",\"color\": \"Gray Space Gray\",\"screen\": \"Màn hình giọt nước 6.52inch HD+\",\"rom\": \"64GB\",\"os\": \"Android\",\"ram\": \"8GB\",\"pin\": \"5000 mAh\",\"frontcam\": \"5MP\",\"backcam\": \"13MP, 2 x 2MP\",\"weight\": \"214g\"}'),
(13, 'Điện thoại Samsung Galaxy', 20890000, 'Điện thoại Samsung Galaxy A04 3GB/32GB (Copper) (SM-A045FZCDXXV)', 'Đang cập nhật', 'https://lh3.googleusercontent.com/EofTXpzj8RycPG4XK64BuRf04B2K3dWEiToKLZ5rqeDGY87akz4YYuiCtyw7G-9Vd_gsu70vENfDXbxYAP5qL3sq3oDbC9g=w1000-rw', 0, 3, '{\"series\": \"Blade\",\"color\": \"Gray Space Gray\",\"screen\": \"Màn hình giọt nước 6.52inch HD+\",\"rom\": \"64GB\",\"os\": \"Android\",\"ram\": \"8GB\",\"pin\": \"5000 mAh\",\"frontcam\": \"5MP\",\"backcam\": \"13MP, 2 x 2MP\",\"weight\": \"214g\"}'),
(14, 'Điện thoại di động Samsung Galaxy', 20890000, 'Điện thoại di động Samsung Galaxy S21+ 5G (8+128GB) SM-G996BZKDXXV (Black)', 'Samsung Galaxy S21+ 5G (8+128GB) SM-G996BZKDXXV là một thiết kế tuyệt tác của Samsung, sở hữu kích thước 6.7 inch với độ phân giải Full HD+ cùng cấu hình mạnh mẽ vượt trội tích hợp chip xử lý Exynos 2100 8 nhân, bộ đôi camera trước sau siêu sắc nét và dung lượng pin cực lớn, sẽ mang đến một thiết bị di động thông minh và vô cùng tiện ích dành cho bạn.', 'https://lh3.googleusercontent.com/D_P6EmJNVUtbOxb2xLezT0htSGvJLkPO7DDN_68hfrQx0hn4vWTURQYbGketgCyqNbLgN2BNL2Mfa6Qk8dMyVpm6yPa_kHYa=w1000-rw', 0, 3, '{\"series\": \"Blade\",\"color\": \"Gray Space Gray\",\"screen\": \"Màn hình giọt nước 6.52inch HD+\",\"rom\": \"64GB\",\"os\": \"Android\",\"ram\": \"8GB\",\"pin\": \"5000 mAh\",\"frontcam\": \"5MP\",\"backcam\": \"13MP, 2 x 2MP\",\"weight\": \"214g\"}'),
(15, 'Điện thoại Samsung Galaxy', 20890000, 'Điện thoại Samsung Galaxy A73 5G 8GB/128GB (Xám) (SM-A736BZAGXXV)', 'Đang cập nhật', 'https://lh3.googleusercontent.com/OEp9wG3DV-yHLldL3MpykJ7HhmO-1js-IB49ba-8u2-XGfRbBmDs9xuCZakdxpEWRUUVR-qievzKk5eVFdM7ttvg8Sm6X_uS=w1000-rw', 0, 3, '{\"series\": \"Blade\",\"color\": \"Gray Space Gray\",\"screen\": \"Màn hình giọt nước 6.52inch HD+\",\"rom\": \"64GB\",\"os\": \"Android\",\"ram\": \"8GB\",\"pin\": \"5000 mAh\",\"frontcam\": \"5MP\",\"backcam\": \"13MP, 2 x 2MP\",\"weight\": \"214g\"}'),
(16, 'Đồng hồ thông minh', 20890000, 'Đồng hồ thông minh Garmin Forerunner 955', 'Đang cập nhật', 'https://lh3.googleusercontent.com/VI_4fp14hAYThNb8hdpnMTmkRgpTauJefigt_rc-6jsKhUiY-M_P7pzeN1OaFsGV70UzhrI0hviixZG3_NP6-x3SOi_dxOM=w1000-rw', 0, 4, '{\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"color\": \"Đen / Black\",\"type\": \"Đồng hồ thông minh\",\"connect\": \"Wifi, GPS, ANT+, Bluetooth\"}'),
(17, 'Đồng hồ thông minh', 20890000, 'Đồng hồ thông minh GPS Garmin Forerunner 55, màu đá trắng, KOR/SEA (010-02562-51)', 'Đồng hồ thông minh GPS Garmin Forerunner 55 010-02562-51 với thiết kế năng động, bắt mắt, được hỗ trợ đa dạng tính năng như đánh giá mức độ luyện tập, quản lý sức khỏe, định vị GPS… Giúp tạo nên hứng khởi, duy trì thói quen luyện tập của bạn.', 'https://lh3.googleusercontent.com/9uRnOorEuREyLNZVDmtmeKQWTNoFPa7NY12luiBAH_NksgZOEA8VzkjdyiBK3m8J6j0PhEdCp4CU1K8q5LTIeI_y9BGC3R6azQ=w1000-rw', 0, 4, '{\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"color\": \"Đen / Black\",\"type\": \"Đồng hồ thông minh\",\"connect\": \"Wifi, GPS, ANT+, Bluetooth\"}'),
(18, 'Đồng hồ thông minh', 20890000, 'Đồng hồ thông minh Garmin Forerunner 255 Music,GPS, Đen, KOR/SEA (010-02641-48)', 'Đồng hồ thông minh Garmin Forerunner 255 010 - 02641 - 48 giúp hỗ trợ theo dõi tình trạng sức khỏe của bạn cũng như thông tin về tình hình luyện tập của bạn và còn nhiều tính năng hiện đại khác. Forerunner 255 có thiết kế thời thượng phù hợp với nhiều phong cách của nhiều đối tượng khách hàng.', 'https://lh3.googleusercontent.com/UKFN3gMReb2J5So_reVv-_QUmwjNe9FLvyZ2mqWS4rpfkKle9lNJoAKm0abGNeiKU1WHnOK3hWRAMK54kQkjHsipLR6-gMxiQA=w1000-rw', 0, 4, '{\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"color\": \"Đen / Black\",\"type\": \"Đồng hồ thông minh\",\"connect\": \"Wifi, GPS, ANT+, Bluetooth\"}'),
(19, 'Đồng hồ thông minh', 20890000, 'Đồng hồ thông minh Garmin Instinct, GPS, Seafoam_010-02064-64', 'Garmin là một trong những hãng sản xuất vòng đeo tay và đồng hồ thông minh được nhiều người dùng tin tưởng và lựa chọn các sản phẩm của hãng với thiết kế đẹp mắt sang trọng phù hợp với nhiều đối tượng sử dụng và tính năng đa dạng Trong đó sản phẩm Đồng hồ thông minh Garmin Instinct, GPS, Seafoam_010-02064-64 thuộc dòng đồng hồ tiêu chuẩn quân sự hoa kỳ được người sử dụng tin tưởng và sử dụng.\r\n\r\n', 'https://lh3.googleusercontent.com/eXyB09sU3JAB4PjZu4RkJGIQzKEjlSo45xU39c1yZzBsX2yinRhOY52oyCjY_C9G9qQJIoZd45T4fOZOB4_B=w1000-rw', 0, 4, '{\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"color\": \"Đen / Black\",\"type\": \"Đồng hồ thông minh\",\"connect\": \"Wifi, GPS, ANT+, Bluetooth\"}'),
(20, 'Đồng hồ thông minh', 20890000, 'Đồng hồ thông minh Garmin MARQ CAPTAIN (SEA_010-02006-54)', 'Garmin là một trong những hãng sản xuất vòng đeo tay và đồng hồ thông minh được nhiều người dùng tin tưởng và lựa chọn các sản phẩm của hãng với thiết kế đẹp mắt sang trọng phù hợp với nhiều đối tượng sử dụng và tính năng đa dạng Trong đó sản phẩm Garmin MARQ CAPTAIN thuộc phân khúc cao cấp với rất nhiều tính năng như hỗ trợ trong công việc luyện tập và rèn luyện sức khỏe, đặc biệt là những tính năng trong hạm đội.\r\n\r\n', 'https://lh3.googleusercontent.com/NQ_FkEqVCxuoo7ClN3JXZFryRwp0wPNbuxXUzmS0yzl9904ID1hYPVPT7m2-UAOD1bTLv2YErFfsJVqjSoQ=w1000-rw', 0, 4, '{\"demand\": \"Gaming, Đồ họa - Kỹ thuật\",\"color\": \"Đen / Black\",\"type\": \"Đồng hồ thông minh\",\"connect\": \"Wifi, GPS, ANT+, Bluetooth\"}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `role` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`ID`, `username`, `password`, `role`) VALUES
(1, 'perovenus', '12345', 1),
(2, 'admin', 'admin', 1),
(3, '123456', '123456', 0),
(4, '12345678', '12345678', 0),
(5, 'laptrinhweb', '123456', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_info`
--

CREATE TABLE `user_info` (
  `ID` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user_info`
--

INSERT INTO `user_info` (`ID`, `user_id`, `name`, `address`, `phone_number`, `email`, `gender`, `dob`, `avatar`) VALUES
(1, 1, 'Cao Quảng Hàn', 'Khắc Khoan, Phú Nghĩa, Bù Gia Mập, Bình Phước', '0349362424', 'han.cao509@gmail.com', 'Nam', '2001-05-02', 'https://genk.mediacdn.vn/2019/9/26/photo-1-1569489747222945898435.jpg'),
(2, 2, 'Cao Quảng Hàn', 'Khắc Khoan, Phú Nghĩa, Bù Gia Mập, Bình Phước', '0349362424', 'han.cao509@gmail.com', 'Nam', '2001-05-02', 'https://genk.mediacdn.vn/2019/9/26/photo-1-1569489747222945898435.jpg'),
(3, 3, 'Cao Quảng Hàn', 'Khắc Khoan, Phú Nghĩa, Bù Gia Mập, Bình Phước', '0349362424', 'han.cao509@gmail.com', 'Nam', '2001-05-02', 'https://genk.mediacdn.vn/2019/9/26/photo-1-1569489747222945898435.jpg'),
(4, 4, 'Cao Quảng Hàn', 'Khắc Khoan, Phú Nghĩa, Bù Gia Mập, Bình Phước', '0349362424', 'han.cao509@gmail.com', 'Nam', '2001-05-02', 'https://genk.mediacdn.vn/2019/9/26/photo-1-1569489747222945898435.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`ID`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID`);

--
-- Các ràng buộc cho bảng `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID`);

--
-- Các ràng buộc cho bảng `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`ID`),
  ADD CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`ID`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`ID`);

--
-- Các ràng buộc cho bảng `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

