-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 16, 2017 at 02:12 PM
-- Server version: 5.5.55-cll
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `izaapinn_ramhoa`
--

-- --------------------------------------------------------

--
-- Table structure for table `hoa_account_type`
--

CREATE TABLE `hoa_account_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_date` datetime NOT NULL,
  `lastr_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_account_type`
--

INSERT INTO `hoa_account_type` (`id`, `name`, `image`, `status`, `created_date`, `lastr_updated`) VALUES
(1, 'Home Owners', 'assets/images/avatar_1.jpg', 0, '2016-08-05 15:59:56', '0000-00-00 00:00:00'),
(2, 'Management Company', 'assets/images/avatar_1.jpg', 0, '2016-08-05 15:59:56', '0000-00-00 00:00:00'),
(3, 'HOA Admin', 'assets/images/avatar_1.jpg', 1, '2016-08-05 15:59:56', '0000-00-00 00:00:00'),
(4, 'Vendor', 'assets/images/avatar_1.jpg', 0, '2016-08-05 15:59:56', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_activity_stream`
--

CREATE TABLE `hoa_activity_stream` (
  `id` int(11) NOT NULL,
  `community_id` int(11) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `photo` text NOT NULL,
  `video` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_activity_stream`
--

INSERT INTO `hoa_activity_stream` (`id`, `community_id`, `creator_id`, `message`, `photo`, `video`, `status`, `created_date`) VALUES
(1, 1, 1, 'Hello', '', '', 0, '2017-08-02 02:17:45'),
(2, 1, 1, 'Hi', '', '', 0, '2017-08-02 02:19:01'),
(3, 1, 1, 'Good Morning!', '', '', 0, '2017-08-02 02:19:44'),
(4, 1, 1, 'Good Evening!', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/59818f5585107-user.png', '', 0, '2017-08-02 02:21:11'),
(5, 1, 1, 'With image', '', '', 0, '2017-08-02 02:25:47'),
(6, 1, 1, 'Another Image', '', '', 0, '2017-08-02 02:27:27'),
(7, 1, 1, 'Test', '', '', 0, '2017-08-02 02:29:43'),
(8, 1, 1, 'Testing with Image', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/598190eb5d906-user.png', '', 0, '2017-08-02 02:44:24'),
(9, 1, 1, 'Hello testing', '', '', 0, '2017-08-02 05:01:29'),
(10, 1, 1, 'Testing hello', '', '', 0, '2017-08-02 05:02:26'),
(11, 1, 1, 'Hha', '', '', 0, '2017-08-02 05:05:10'),
(12, 1, 1, 'Vhh', '', '', 0, '2017-08-02 05:07:11'),
(13, 1, 1, 'Gjhhj', '', '', 0, '2017-08-02 05:08:14'),
(14, 1, 1, 'Hi', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981b338e4b72-user.png', '', 0, '2017-08-02 05:10:47'),
(15, 1, 1, 'Good night', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981b69244d24-user.png', '', 0, '2017-08-02 05:25:04'),
(16, 1, 1, 'Hello', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981b7204e5c3-user.png', '', 0, '2017-08-02 05:27:27'),
(17, 1, 1, 'Testing', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981b7c5238b1-user.png', '', 0, '2017-08-02 05:30:04'),
(20, 1, 1, 'Hooio', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981bc1eeffa0-user.png', '', 0, '2017-08-02 05:48:45'),
(21, 1, 1, 'Yes got it', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981bd0b22409-user.png', '', 0, '2017-08-02 05:52:40'),
(22, 1, 1, 'Gh', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981beff106f6-user.png', '', 0, '2017-08-02 06:00:59'),
(23, 1, 1, 'Hhhhh', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/5981c70d05f77-user.png', '', 0, '2017-08-02 06:35:23'),
(24, 1, 1, 'No image', '', '', 0, '2017-08-02 06:37:54'),
(25, 1, 1, 'Hello', '', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/videos/5981d79f8ee7b-user.mp4', 0, '2017-08-02 07:45:51'),
(26, 1, 1, 'Hello', '', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/videos/598303246b31d-user.mp4', 0, '2017-08-03 05:03:58'),
(27, 12, 2, 'Hello', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/2/images/5985c23cb632d-user.png', '', 0, '2017-08-05 07:03:54'),
(28, 12, 3, 'Test post by adam', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/3/images/59861213c1def-user.png', '', 0, '2017-08-05 12:44:34'),
(29, 12, 1, 'Good Morning', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/59897afeb26dd-user.png', '', 0, '2017-08-08 02:49:00'),
(30, 12, 1, 'Happy friendship day', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/59898c5930f0a-user.png', '', 0, '2017-08-08 04:03:03'),
(31, 12, 1, 'Happy', 'http://162.144.41.156/~izaapinn/ram/uploads/feeds/1/images/598c64a93b145-user.png', '', 0, '2017-08-10 07:50:20');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_classifieds`
--

CREATE TABLE `hoa_classifieds` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ad_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `photos` text NOT NULL,
  `street1` varchar(255) NOT NULL,
  `street2` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_classifieds`
--

INSERT INTO `hoa_classifieds` (`id`, `user_id`, `ad_name`, `description`, `photos`, `street1`, `street2`, `city`, `state`, `country`, `zipcode`, `latitude`, `longitude`, `created_date`, `last_updated`) VALUES
(1, 1, 'Test Classifieds', 'Test', 'http://162.144.41.156/~izaapinn/ram/uploads/classifieds/1/598d8591eb447-classified.png,http://162.144.41.156/~izaapinn/ram/uploads/classifieds/1/598d859576e6e-classified.png', 'SVS Nagar', 'Valasaravakkam', 'Chennai', 'Tamilnadu', 'India', '600087', '13.0386464', '80.1737128', '2017-08-11 04:23:09', '0000-00-00 00:00:00'),
(2, 1, 'Ram', 'Ram', 'http://162.144.41.156/~izaapinn/ram/uploads/classifieds/2/598d88a25eba3-classified.png,http://162.144.41.156/~izaapinn/ram/uploads/classifieds/2/598d88a4b707a-classified.png', 'Journalists Colony', 'Thiruvanmiyur', 'Chennai', 'Tamilnadu', 'India', '600041', '12.9742858', '80.2607068', '2017-08-11 04:36:12', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_community`
--

CREATE TABLE `hoa_community` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `banner` text NOT NULL,
  `desc` text NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `website` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `fax` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_community`
--

INSERT INTO `hoa_community` (`id`, `name`, `banner`, `desc`, `code`, `website`, `address`, `phone`, `mobile`, `fax`, `latitude`, `longitude`, `status`, `created_by`, `created_date`, `last_updated`) VALUES
(12, 'Test Community', 'assets/images/3.jpg', 'Test Community Desc', 'TE74TY0', 'http://www.google.com', 'No 2/2,Third Floor, SVS Nagar 2nd Main Road,<br />\r\nValasaravakkam,<br />\r\nChennai,<br />\r\nIndia.<br />\r\n600087', '1234567890', '1234567890', '1234567890', '13.0492724', '80.1760637', 0, 3, '2016-08-30 12:32:40', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_community_docs`
--

CREATE TABLE `hoa_community_docs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `community_id` int(11) NOT NULL,
  `doc` text NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_community_docs`
--

INSERT INTO `hoa_community_docs` (`id`, `user_id`, `community_id`, `doc`, `created_date`) VALUES
(1, 3, 1, 'assets/2.jpg', '2016-08-30 18:24:47'),
(5, 3, 1, 'assets/docs/AdzepaMMS.docx', '2016-08-30 18:50:25');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_emergency_notification`
--

CREATE TABLE `hoa_emergency_notification` (
  `id` int(11) NOT NULL,
  `community_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_emergency_notification`
--

INSERT INTO `hoa_emergency_notification` (`id`, `community_id`, `user_id`, `title`, `description`, `created_date`) VALUES
(1, 1, 3, 'Test Notification', 'Test Notification', '2016-08-31 11:52:58');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_events`
--

CREATE TABLE `hoa_events` (
  `id` int(11) NOT NULL,
  `posted_by` int(11) NOT NULL,
  `community_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `from_date` datetime NOT NULL,
  `to_date` datetime NOT NULL,
  `address` text NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_events`
--

INSERT INTO `hoa_events` (`id`, `posted_by`, `community_id`, `name`, `desc`, `from_date`, `to_date`, `address`, `latitude`, `longitude`, `created_date`) VALUES
(1, 2, '1', 'Test Events', 'Test Events Desc', '2016-08-31 22:05:00', '2016-08-31 22:05:00', 'Chennai', '13.0826802', '80.2707184', '1899-11-30 22:46:30');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_events_results`
--

CREATE TABLE `hoa_events_results` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_events_results`
--

INSERT INTO `hoa_events_results` (`id`, `user_id`, `event_id`, `status`, `created_date`) VALUES
(1, 2, 1, 1, '2016-08-31 23:22:27'),
(2, 3, 1, 1, '2016-08-31 23:22:27'),
(3, 3, 1, 2, '2016-09-02 12:13:38'),
(4, 3, 1, 3, '2016-09-02 12:13:41');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_form`
--

CREATE TABLE `hoa_form` (
  `id` int(11) NOT NULL,
  `form_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `community_id` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_form`
--

INSERT INTO `hoa_form` (`id`, `form_name`, `user_id`, `community_id`, `created_date`) VALUES
(1, 'Ram', 1, 1, NULL),
(2, 'Test', 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `hoa_form_data`
--

CREATE TABLE `hoa_form_data` (
  `id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `data` text NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_form_data`
--

INSERT INTO `hoa_form_data` (`id`, `form_id`, `data`, `created_date`) VALUES
(1, 1, '{\"Title\":\"Personal Info\",\"Firstname\":\"Ramkumar\",\"Lastname\":\"S\",\"Email-ID\":\"ramkumar.izaap@gmail.com\",\"Age\":\"25\",\"PayTo\":\"To Camp Registration\",\"Amount\":\"$5.00\",\"TransID\":\"\",\"Status\":\"Pending\"}', '2016-08-26 13:18:40'),
(2, 2, '{\"Gender\":\"Male\",\"PayTo\":\"To Camp Registration\",\"Amount\":\"$5.00\",\"TransID\":\"\",\"Status\":\"Pending\"}', '2016-08-31 15:01:11');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_form_fields`
--

CREATE TABLE `hoa_form_fields` (
  `id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `field` text NOT NULL,
  `sort` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_form_fields`
--

INSERT INTO `hoa_form_fields` (`id`, `form_id`, `field`, `sort`) VALUES
(6, 1, '{\"form_id\":\"1\",\"label\":\"Test Form\",\"type\":\"title-field\",\"options\":\",,\",\"required\":\"off\"}', 0),
(18, 1, '{\"form_id\":\"1\",\"label\":\"Personal Info\",\"type\":\"personal-field\",\"options\":\",,\",\"required\":\"on\"}', 1),
(19, 1, '{\"form_id\":\"1\",\"label\":\"Save Form\",\"type\":\"submit-field\",\"options\":\",,\",\"required\":\"off\"}', 3),
(21, 1, '{\"form_id\":\"1\",\"label\":\"To Camp Registration\",\"type\":\"payment-field\",\"options\":\",,\",\"amount\":\"5.00\",\"required\":\"off\"}', 1),
(22, 2, '{\"form_id\":\"2\",\"label\":\"Gender\",\"type\":\"select-field\",\"options\":\"Male,Female,\",\"amount\":\"5.00\",\"required\":\"on\"}', 0),
(23, 2, '{\"form_id\":\"2\",\"label\":\"Test\",\"type\":\"radio-field\",\"options\":\"1,2,4\",\"amount\":\"5.00\",\"required\":\"on\"}', 2),
(24, 2, '{\"form_id\":\"2\",\"label\":\"Teste 1\",\"type\":\"check-field\",\"options\":\"1,3,4,5\",\"amount\":\"5.00\",\"required\":\"on\"}', 1),
(25, 2, '{\"form_id\":\"2\",\"label\":\"To Camp Registration\",\"type\":\"payment-field\",\"options\":\",,\",\"amount\":\"5.00\",\"required\":\"on\"}', 3),
(26, 2, '{\"form_id\":\"2\",\"label\":\"Save\",\"type\":\"submit-field\",\"options\":\",,\",\"amount\":\"5.00\",\"required\":\"off\"}', 4);

-- --------------------------------------------------------

--
-- Table structure for table `hoa_form_payment`
--

CREATE TABLE `hoa_form_payment` (
  `id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pay_to` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `trans_id` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_form_payment`
--

INSERT INTO `hoa_form_payment` (`id`, `form_id`, `user_id`, `pay_to`, `amount`, `trans_id`, `status`, `created_date`) VALUES
(1, 1, 1, 'To Camp Registration', '5.00', '', 'Pending', '2016-08-26 13:18:40'),
(2, 2, 1, 'To Camp Registration', '5.00', '', 'Pending', '2016-08-31 15:01:11');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_messages`
--

CREATE TABLE `hoa_messages` (
  `id` int(11) NOT NULL,
  `from_id` int(11) NOT NULL,
  `to_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `file` text NOT NULL,
  `reply_id` int(11) NOT NULL,
  `admin_read` int(11) NOT NULL,
  `user_read` int(11) NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_messages`
--

INSERT INTO `hoa_messages` (`id`, `from_id`, `to_id`, `subject`, `message`, `file`, `reply_id`, `admin_read`, `user_read`, `created_date`) VALUES
(16, 5, 3, 'Violation', 'Hi', 'assets/files/1.png', 16, 1, 1, '2016-09-02 18:03:44'),
(17, 1, 3, 'Help', 'Yes', 'assets/files/11.png', 17, 1, 1, '2016-09-02 18:05:22');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_resource_category`
--

CREATE TABLE `hoa_resource_category` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `cat_img` text NOT NULL,
  `cat_desc` text NOT NULL,
  `community` text NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_resource_category`
--

INSERT INTO `hoa_resource_category` (`id`, `cat_name`, `cat_img`, `cat_desc`, `community`, `created_by`, `created_date`, `last_updated`) VALUES
(3, 'Download', 'assets/images/main-logo.png', 'This category for downloadable files.', '1', 2, '2016-08-15 17:21:27', '0000-00-00 00:00:00'),
(4, 'Links', 'assets/images/main-logo.png', 'This category leads to links files/', '1', 2, '2016-08-15 17:36:43', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_resource_document`
--

CREATE TABLE `hoa_resource_document` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `document` text NOT NULL,
  `description` text NOT NULL,
  `category` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_resource_document`
--

INSERT INTO `hoa_resource_document` (`id`, `title`, `document`, `description`, `category`, `created_by`, `created_date`, `last_updated`) VALUES
(2, 'Test', 'assets/docs/main-logo.png', 'Test', 3, 2, '2016-08-15 18:19:27', '0000-00-00 00:00:00'),
(3, 'Sample', 'assets/docs/main-logo.png', 'Sample', 3, 2, '2016-08-15 20:10:37', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_stream_comments`
--

CREATE TABLE `hoa_stream_comments` (
  `id` int(11) NOT NULL,
  `stream_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_stream_comments`
--

INSERT INTO `hoa_stream_comments` (`id`, `stream_id`, `user_id`, `comments`, `created_date`, `last_updated`) VALUES
(1, 26, 1, 'Hello', '2017-08-04 06:13:29', '0000-00-00 00:00:00'),
(3, 26, 1, 'Hi', '2017-08-04 08:14:41', '0000-00-00 00:00:00'),
(4, 26, 1, 'Hello World', '2017-08-04 08:16:33', '0000-00-00 00:00:00'),
(5, 26, 1, 'Got', '2017-08-04 08:17:35', '0000-00-00 00:00:00'),
(6, 26, 1, 'Yahooo', '2017-08-04 08:18:51', '0000-00-00 00:00:00'),
(7, 26, 1, 'No', '2017-08-04 08:20:42', '0000-00-00 00:00:00'),
(8, 25, 1, 'Gooooo', '2017-08-04 08:22:49', '0000-00-00 00:00:00'),
(9, 26, 1, 'Gggg', '2017-08-04 08:24:01', '0000-00-00 00:00:00'),
(10, 23, 1, 'Super', '2017-08-04 08:52:20', '0000-00-00 00:00:00'),
(11, 24, 1, 'Goog', '2017-08-04 09:00:52', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_stream_likes`
--

CREATE TABLE `hoa_stream_likes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `stream_id` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_stream_likes`
--

INSERT INTO `hoa_stream_likes` (`id`, `user_id`, `stream_id`, `created_date`, `updated_date`) VALUES
(1, 1, 26, '2017-08-04 12:29:33', '0000-00-00 00:00:00'),
(2, 2, 26, '2017-08-04 15:46:43', '0000-00-00 00:00:00'),
(4, 1, 25, '2017-08-04 09:19:31', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hoa_users`
--

CREATE TABLE `hoa_users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `code` int(11) NOT NULL,
  `photo` text NOT NULL,
  `video` text NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `about_me` text NOT NULL,
  `usertype` int(11) NOT NULL,
  `community_id` int(11) NOT NULL,
  `published` int(11) NOT NULL DEFAULT '1',
  `created_date` datetime NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoa_users`
--

INSERT INTO `hoa_users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `code`, `photo`, `video`, `address`, `phone`, `mobile`, `about_me`, `usertype`, `community_id`, `published`, `created_date`, `last_updated`) VALUES
(1, 'Ramkumar', 'Izaap', 'ramkumar', 'ramkumar.izaap@gmail.com', '123456', 0, '', '', '', '', '976543210', '', 1, 12, 0, '2017-08-05 06:54:30', '0000-00-00 00:00:00'),
(2, 'Developer', 'Dev', 'developer', 'developer@gmail.com', '123456', 0, '', '', '', '', '668896558', '', 1, 12, 0, '2017-08-05 07:03:01', '0000-00-00 00:00:00'),
(3, 'Adam', 'Test', 'adamtest', 'adam@limnet.com', 'password', 0, '', '', '', '', '6024464214', '', 1, 12, 0, '2017-08-05 12:43:10', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hoa_account_type`
--
ALTER TABLE `hoa_account_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_activity_stream`
--
ALTER TABLE `hoa_activity_stream`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_classifieds`
--
ALTER TABLE `hoa_classifieds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_community`
--
ALTER TABLE `hoa_community`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_community_docs`
--
ALTER TABLE `hoa_community_docs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_emergency_notification`
--
ALTER TABLE `hoa_emergency_notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_events`
--
ALTER TABLE `hoa_events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_events_results`
--
ALTER TABLE `hoa_events_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_form`
--
ALTER TABLE `hoa_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_form_data`
--
ALTER TABLE `hoa_form_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_form_fields`
--
ALTER TABLE `hoa_form_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_form_payment`
--
ALTER TABLE `hoa_form_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_messages`
--
ALTER TABLE `hoa_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_resource_category`
--
ALTER TABLE `hoa_resource_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_resource_document`
--
ALTER TABLE `hoa_resource_document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_stream_comments`
--
ALTER TABLE `hoa_stream_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_stream_likes`
--
ALTER TABLE `hoa_stream_likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoa_users`
--
ALTER TABLE `hoa_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hoa_account_type`
--
ALTER TABLE `hoa_account_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `hoa_activity_stream`
--
ALTER TABLE `hoa_activity_stream`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `hoa_classifieds`
--
ALTER TABLE `hoa_classifieds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `hoa_community`
--
ALTER TABLE `hoa_community`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `hoa_community_docs`
--
ALTER TABLE `hoa_community_docs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `hoa_emergency_notification`
--
ALTER TABLE `hoa_emergency_notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `hoa_events`
--
ALTER TABLE `hoa_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `hoa_events_results`
--
ALTER TABLE `hoa_events_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `hoa_form`
--
ALTER TABLE `hoa_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `hoa_form_data`
--
ALTER TABLE `hoa_form_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `hoa_form_fields`
--
ALTER TABLE `hoa_form_fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `hoa_form_payment`
--
ALTER TABLE `hoa_form_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `hoa_messages`
--
ALTER TABLE `hoa_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `hoa_resource_category`
--
ALTER TABLE `hoa_resource_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `hoa_resource_document`
--
ALTER TABLE `hoa_resource_document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `hoa_stream_comments`
--
ALTER TABLE `hoa_stream_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `hoa_stream_likes`
--
ALTER TABLE `hoa_stream_likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `hoa_users`
--
ALTER TABLE `hoa_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
