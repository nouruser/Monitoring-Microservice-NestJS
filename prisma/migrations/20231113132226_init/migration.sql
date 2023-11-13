-- CreateTable
CREATE TABLE `Devices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `connectionTime` VARCHAR(191) NOT NULL,
    `disconnectionTime` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `manufacturer` VARCHAR(191) NULL,
    `firmwareVersion` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
