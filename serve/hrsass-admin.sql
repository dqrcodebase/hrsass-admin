/*
 Navicat Premium Data Transfer

 Source Server         : 本地连接
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : localhost:3306
 Source Schema         : hrsass-admin

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 06/01/2025 17:13:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Admin
-- ----------------------------
DROP TABLE IF EXISTS `Admin`;
CREATE TABLE `Admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `loginName` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `loginPwd` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Admin
-- ----------------------------
BEGIN;
INSERT INTO `Admin` VALUES (1, 'admin', '超级管理员', '14e1b600b1fd579f47433b88e8d85291');
COMMIT;

-- ----------------------------
-- Table structure for Banner
-- ----------------------------
DROP TABLE IF EXISTS `Banner`;
CREATE TABLE `Banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `midImg` varchar(255) NOT NULL,
  `bigImg` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Banner
-- ----------------------------
BEGIN;
INSERT INTO `Banner` VALUES (1, 'http://localhost:3000/public/images/banner1.jpg', 'http://localhost:3000/public/images/banner1.jpg', '这是标题', '这是描述');
COMMIT;

-- ----------------------------
-- Table structure for Role
-- ----------------------------
DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(255) NOT NULL,
  `roleDesc` varchar(255) DEFAULT NULL,
  `roleCode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Role
-- ----------------------------
BEGIN;
INSERT INTO `Role` VALUES (1, '角色0', '描述0', 'code0');
INSERT INTO `Role` VALUES (2, '角色1', '描述1', 'code1');
INSERT INTO `Role` VALUES (3, '角色2', '描述2', 'code2');
INSERT INTO `Role` VALUES (4, '角色3', '描述3', 'code3');
INSERT INTO `Role` VALUES (5, '角色4', '描述4', 'code4');
INSERT INTO `Role` VALUES (6, '角色5', '描述5', 'code5');
INSERT INTO `Role` VALUES (7, '角色6', '描述6', 'code6');
INSERT INTO `Role` VALUES (8, '角色7', '描述7', 'code7');
INSERT INTO `Role` VALUES (9, '角色8', '描述8', 'code8');
INSERT INTO `Role` VALUES (10, '角色9', '描述9', 'code9');
INSERT INTO `Role` VALUES (11, '角色10', '描述10', 'code10');
INSERT INTO `Role` VALUES (12, '角色11', '描述11', 'code11');
INSERT INTO `Role` VALUES (13, '角色12', '描述12', 'code12');
INSERT INTO `Role` VALUES (14, '角色13', '描述13', 'code13');
INSERT INTO `Role` VALUES (15, '角色14', '描述14', 'code14');
INSERT INTO `Role` VALUES (16, '角色15', '描述15', 'code15');
INSERT INTO `Role` VALUES (17, '角色16', '描述16', 'code16');
INSERT INTO `Role` VALUES (18, '角色17', '描述17', 'code17');
INSERT INTO `Role` VALUES (19, '角色18', '描述18', 'code18');
INSERT INTO `Role` VALUES (20, '角色19', '描述19', 'code19');
INSERT INTO `Role` VALUES (21, '角色20', '描述20', 'code20');
INSERT INTO `Role` VALUES (22, '角色21', '描述21', 'code21');
INSERT INTO `Role` VALUES (23, '角色22', '描述22', 'code22');
INSERT INTO `Role` VALUES (24, '角色23', '描述23', 'code23');
INSERT INTO `Role` VALUES (25, '角色24', '描述24', 'code24');
INSERT INTO `Role` VALUES (26, '角色25', '描述25', 'code25');
INSERT INTO `Role` VALUES (27, '角色26', '描述26', 'code26');
INSERT INTO `Role` VALUES (28, '角色27', '描述27', 'code27');
INSERT INTO `Role` VALUES (29, '角色28', '描述28', 'code28');
INSERT INTO `Role` VALUES (30, '角色29', '描述29', 'code29');
INSERT INTO `Role` VALUES (31, '角色30', '描述30', 'code30');
INSERT INTO `Role` VALUES (32, '角色31', '描述31', 'code31');
INSERT INTO `Role` VALUES (33, '角色32', '描述32', 'code32');
INSERT INTO `Role` VALUES (34, '角色33', '描述33', 'code33');
INSERT INTO `Role` VALUES (35, '角色34', '描述34', 'code34');
INSERT INTO `Role` VALUES (36, '角色35', '描述35', 'code35');
INSERT INTO `Role` VALUES (37, '角色36', '描述36', 'code36');
INSERT INTO `Role` VALUES (38, '角色37', '描述37', 'code37');
INSERT INTO `Role` VALUES (39, '角色38', '描述38', 'code38');
INSERT INTO `Role` VALUES (40, '角色39', '描述39', 'code39');
INSERT INTO `Role` VALUES (41, '角色40', '描述40', 'code40');
INSERT INTO `Role` VALUES (42, '角色41', '描述41', 'code41');
INSERT INTO `Role` VALUES (43, '角色42', '描述42', 'code42');
INSERT INTO `Role` VALUES (44, '角色43', '描述43', 'code43');
INSERT INTO `Role` VALUES (45, '角色44', '描述44', 'code44');
INSERT INTO `Role` VALUES (46, '角色45', '描述45', 'code45');
INSERT INTO `Role` VALUES (47, '角色46', '描述46', 'code46');
INSERT INTO `Role` VALUES (48, '角色47', '描述47', 'code47');
INSERT INTO `Role` VALUES (49, '角色48', '描述48', 'code48');
INSERT INTO `Role` VALUES (50, '角色49', '描述49', 'code49');
INSERT INTO `Role` VALUES (51, '角色50', '描述50', 'code50');
INSERT INTO `Role` VALUES (52, '角色51', '描述51', 'code51');
INSERT INTO `Role` VALUES (53, '角色52', '描述52', 'code52');
INSERT INTO `Role` VALUES (54, '角色53', '描述53', 'code53');
INSERT INTO `Role` VALUES (55, '角色54', '描述54', 'code54');
INSERT INTO `Role` VALUES (56, '角色55', '描述55', 'code55');
INSERT INTO `Role` VALUES (57, '角色56', '描述56', 'code56');
INSERT INTO `Role` VALUES (58, '角色57', '描述57', 'code57');
INSERT INTO `Role` VALUES (59, '角色58', '描述58', 'code58');
INSERT INTO `Role` VALUES (60, '角色59', '描述59', 'code59');
INSERT INTO `Role` VALUES (61, '角色60', '描述60', 'code60');
INSERT INTO `Role` VALUES (62, '角色61', '描述61', 'code61');
INSERT INTO `Role` VALUES (63, '角色62', '描述62', 'code62');
INSERT INTO `Role` VALUES (64, '角色63', '描述63', 'code63');
INSERT INTO `Role` VALUES (65, '角色64', '描述64', 'code64');
INSERT INTO `Role` VALUES (66, '角色65', '描述65', 'code65');
INSERT INTO `Role` VALUES (67, '角色66', '描述66', 'code66');
INSERT INTO `Role` VALUES (68, '角色67', '描述67', 'code67');
INSERT INTO `Role` VALUES (69, '角色68', '描述68', 'code68');
INSERT INTO `Role` VALUES (70, '角色69', '描述69', 'code69');
INSERT INTO `Role` VALUES (71, '角色70', '描述70', 'code70');
INSERT INTO `Role` VALUES (72, '角色71', '描述71', 'code71');
INSERT INTO `Role` VALUES (73, '角色72', '描述72', 'code72');
INSERT INTO `Role` VALUES (74, '角色73', '描述73', 'code73');
INSERT INTO `Role` VALUES (75, '角色74', '描述74', 'code74');
INSERT INTO `Role` VALUES (76, '角色75', '描述75', 'code75');
INSERT INTO `Role` VALUES (77, '角色76', '描述76', 'code76');
INSERT INTO `Role` VALUES (78, '角色77', '描述77', 'code77');
INSERT INTO `Role` VALUES (79, '角色78', '描述78', 'code78');
INSERT INTO `Role` VALUES (80, '角色79', '描述79', 'code79');
INSERT INTO `Role` VALUES (81, '角色80', '描述80', 'code80');
INSERT INTO `Role` VALUES (82, '角色81', '描述81', 'code81');
INSERT INTO `Role` VALUES (83, '角色82', '描述82', 'code82');
INSERT INTO `Role` VALUES (84, '角色83', '描述83', 'code83');
INSERT INTO `Role` VALUES (85, '角色84', '描述84', 'code84');
INSERT INTO `Role` VALUES (86, '角色85', '描述85', 'code85');
INSERT INTO `Role` VALUES (87, '角色86', '描述86', 'code86');
INSERT INTO `Role` VALUES (88, '角色87', '描述87', 'code87');
INSERT INTO `Role` VALUES (89, '角色88', '描述88', 'code88');
INSERT INTO `Role` VALUES (90, '角色89', '描述89', 'code89');
INSERT INTO `Role` VALUES (91, '角色90', '描述90', 'code90');
INSERT INTO `Role` VALUES (92, '角色91', '描述91', 'code91');
INSERT INTO `Role` VALUES (93, '角色92', '描述92', 'code92');
INSERT INTO `Role` VALUES (94, '角色93', '描述93', 'code93');
INSERT INTO `Role` VALUES (95, '角色94', '描述94', 'code94');
INSERT INTO `Role` VALUES (96, '角色95', '描述95', 'code95');
INSERT INTO `Role` VALUES (97, '角色96', '描述96', 'code96');
INSERT INTO `Role` VALUES (98, '角色97', '描述97', 'code97');
INSERT INTO `Role` VALUES (99, '角色98', '描述98', 'code98');
INSERT INTO `Role` VALUES (100, '角色99', '描述99', 'code99');
INSERT INTO `Role` VALUES (101, 'dfsgdf', '', NULL);
COMMIT;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `realName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of User
-- ----------------------------
BEGIN;
INSERT INTO `User` VALUES (1, 'admin', '超级管理员', '14e1b600b1fd579f47433b88e8d85291', 1, '18888888888', '/static/images/avatar.jpg');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
