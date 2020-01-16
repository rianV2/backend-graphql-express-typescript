-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 16, 2020 at 04:37 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `graphql-be`
--

-- --------------------------------------------------------

--
-- Table structure for table `recognized_entity`
--

DROP TABLE IF EXISTS `recognized_entity`;
CREATE TABLE IF NOT EXISTS `recognized_entity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_picture` text COLLATE utf8mb4_unicode_ci,
  `entity_type` enum('public_figure','organization','social_community') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique` (`name`,`entity_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recognized_entity`
--

INSERT INTO `recognized_entity` (`id`, `name`, `display_name`, `display_picture`, `entity_type`, `created_at`) VALUES
(1, 'riaan', 'Riasn', '#', 'public_figure', '2019-10-30 09:57:53'),
(2, 'dodol_bangka', 'Dodol Bangka', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/22/3517263/3517263_44e238e4-231c-4d27-8060-8b5c41a2fe78_480_480.jpg', 'public_figure', '2019-11-30 09:57:53'),
(3, 'rian', 'Rian', '#', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `active`, `created_at`, `updated_at`) VALUES
(1, 'rian', '$2a$10$B71Q7.48jv2gtWuttp86FuumJsFR6HjKlA0IdozUbAuwVGrjpxDZ.', 'Pimp1inan', 1, '2020-01-16 04:33:53', '2020-01-16 04:35:58');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
