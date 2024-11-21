---
title: Migrating Google Drive Files to another Google Account
tags: 
language: english
description: Migrate all data from Google Drive university account to personal google drive
date:published: 2024-05-20
date:updated:
---

Migrating Google Drive Files to another Google Account

Use cases, migrate all data from Google Drive university account to personal google drive. Either because of one thing or another that the data or account will be deleted after graduate.

• Keep important files when you graduate, switch schools, or leave for another reason

The order starts from the most not recommended way to the most recommended one.  I will be listing all the ways then pull out the ultimate solution.

### 1. Download and Reupload

Download all to local PC then reupload all the downloaded local data back to our personal Google Drive account.

The most unrecommended way.  Takes the longest time

**Pros:**

- The most innocent approach

**Cons:**

- For large data, takes a very very long time
- Takes a lot of local CPU usage
- Local CPU has to reserve that exact amount of space, then take days to reupload to new drive
- Internet speed —> takes long time to download, apalagi upload GBs of data

### 2. Make a Copy

Basically, for every file that we want to migrate, we right click and choose the "Make a Copy" option. This works but takes a very long time to do since we cannot “Make a Copy” for folders.

**Pros:**

- No local CPU used
- Using user interface, no code needed

**Cons:**

- Cannot make a copy for folders, so need to do for individual folder —> takes a long time for many files
- Lost original metadata and edit history

### 3. Use Python Script in Google Colab

Steps:

- Create a folder for files you want to make a copy of in your destination google account
- go to your UI GDrive account. Go to "My Drive" atau "Drive Saya".
- Di situ, buat satu folder baru (bebas namanya) yg bakal jadi tempat kita meng-copy semua file yg mau di migrate. (contoh yg gue highlight)
- Perlu diketahui bhw, kita cuman bisa copy-paste folder yg bukan di-share dari orang lain (at least ini setau gue). Jadi kalau kita lihat, folder2 yang ada panah bulet nya (see image here) ends up gak gue copy ke dalam folder baru yg gue bikin utk Backup.
- Move semua file/folder yang pengen dimigrate ke folder tsb. Di gue, as shown before, nama folder gue "Old_UI_GDrive" dan as can be seen here gue taroh semua file yg locally-owned (bukan shared) dan ini gede sih since gue pake buat kerjaan (dataset besar)
- Kembali ke folder atas, My Drive. Klik kanan di Folder migration tadi, lalu pilih "Share", dan simply share ke akun Google pribadi. Gue sih set itu jadi Editor juga.
- login ke Drive pribadi yang bakal menerima migration datanya. Pilih "Shared with Me", dan kalau step sebelumnya benar, kita akan menemukan folder migration tadi di sini juga. Klik kanan di foldernya, pilih "Add Shorcut to Drive".
- Cek "My Drive" di GDrive pribadi. Harusnya folder migration nya muncul. BUT, blm kelar. Notice the panah bulat di samping logo folder migration nya? Itu artinya, folder migration masih "shared folder" + ownernya akun UI kita. Jadi kalau akun UI dihapus, folder ini jg akan ilang.
- bikin folder baru di My Drive sana, buat jadi "folder penerima migration data". Di kasus gue, gue kasih nama "Backup_Old_UI_Drive" (see pic). We are almost done!
- this will be our source folder. folder that we want the contents to be copied to source folder.
- Go to [colab.research.google.com](https://t.co/HyfR2eO3na) with your destination google account
- create “new notebook”
- create folder destination
- mount drive
- Lo akan melihat gambar layout seperti kanvas kosong (see first pic).
- “Mount Drive" ke Google Colab. Type the command in the second pic (see pic), lalu klik tombol "Play" yg kayak play video, di sebelah cell nya

- Once lo klik itu, tunggu berapa lama, bakal muncul prompt untuk memasukkan semacam OTP code/link sbb (see pic). Cara dapetin OTP linknya, klik link birunya, lalu sign in dan pilih OK-OK an, nanti akan ada semacam link kyk [see second pic]. Copy-paste dia ke prompt di Colab+Enter.

- Abis berhasil, akan ada tanda checklist hijau di samping cell Colab td (see pic).
- Sekarang, Colab kita udah terhubung dengan Google Drive. Neat!
- We can check by checking the folder icon on the left, klik (second pic), lalu dropdown "gdrive" (third pic)
- bikin cell baru di Colab, masukkan command berikut (first pic). Sesuaikan dengan nama folder rekan2 yah (ini contoh dr gue).
- Pencet play button lg (run command), nanti hasilnya akan ada sebuah text address di bawahnya (see second pic)

- I like to be safe, jadi pastikan sekali lagi dengan ketik di cell baru "pwd", see first pic.
- Harusnya, abis di-run command, link / address yg sama akan muncul:

- Now, the last part. Ketik command di cell baru:
    
    !cp -r [hasil pwd di atas] [address receiving folder]
    
    Mari lihat pelan2. Utk hasil pwd, tinggal copas dr hasil sebelumnya. Untuk address receiving folder, klik kanan folder tersebut di GDrive explorer kita, lalu pilih "Copy path"
    
- Combining all that, you will have something like (first pic). Tinggal klik run / play di cell tersebut aaaandd.... we're done! Tinggal tunggu Google doing its thing on its Cloud *for us*.

- Semakin besar folder kita, ya mungkin bgt juga akan takes time. Tapi bisa gue jamin, this is *much* faster than download dulu + upload ulang semua ke Drive pribadi.
- Tinggal tunggu running button nya berubah jadi ijo, plus sambil cek2 aja di GDrive pribadi.

**Pros:**

- No local CPU used

**Cons:**

- rewrite data metadata
- may seem intimidating to non coding people since uses lines of code, not user interface
- Gdocs, gsheets, gslides not supported, cannot be copied
- For me, I had to trf data little by little cause there was a limit too to the CPU usage

### 4. Use `Transfer Your Content` Feature from Google Takeout

This is actually the official way from Google. This feature is only available to authorised G Suite for Education Accounts. Unfortunately, since I figured this method way later than the fifth one, I have never tried this method. However,  from the [help](https://support.google.com/accounts/answer/6386856?authuser=1&visit_id=637841335359358143-3267796070&p=transfer_content_settingsstep&hl=en&rd=1#zippy=%2Csee-your-copied-files%2Cview-transfer-history%2Cwhat-changes-on-copied-files%2Cmy-drive-files-that-arent-copied) page, I know the pros and cons.

Each time you copy files from your school account, a new set of copies is created in your Google Account.

Steps:

1. **Prepare your files**

If you want to include files that other people have shared with you (files in “Shared with me”, [add those files to My Drive](https://support.google.com/drive/answer/2375057).  (make a shortcut to those folders or files to your drive). 

1. **Start the copy process**

On your school account, go to [Transfer your content](https://takeout.google.com/transfer).

Enter the email address of the Google Account where you want to copy your content.

Select **Get code**.

On your Google Account, check your Gmail inbox for a confirmation email from Google. In the email, select **Get confirmation code**. A new tab will open with a code.

On your school account, go back to the "Transfer your content" page. Enter the code, then choose **Verify**.

Choose the content you'd like to copy, then select **Start transfer**.

**Details about the copy process**

The copy process usually happens within a few hours, but it can take up to a week.

Copied files might appear in batches on your Google Account during the copy process.

When your files are finished copying, you'll get an email at your Gmail address.

- **Gmail:** Copied content will have a label with your school account name and the date you started the copy process.
- **Drive:** Copied content ;will be in a folder labeled with your school account name and the date you started the copy process.

There are a few important changes that happen on files copied from Google Drive:

- You automatically become [the file owner](https://support.google.com/drive/answer/2494892) of all copied files. (The owners of the original files remain the same.)
- Copied files aren't shared with others. (You can always choose to share them.)
- Comments are copied, but revision history isn't.

**Pros:**

- No local CPU used
- You can also copy Email in [Gmail](https://mail.google.com/) (not contacts, chats, or tasks)
- Documents in your ["Shared with me” folder](https://drive.google.com/corp/drive/shared-with-me) (unless, to restrict sharing, the document owner turns off downloads and copies for commenters and viewers)
- The original files stay in your school account. Any changes you make to the copied files don't affect the originals.
- 

**Cons:**

- Cannot pick which ones

### 5. Transfer Ownership

gabisa langsung dari kita trs bikin ownernya akun baru kita. space disavenya masih tetep di google drive univ.

kalo ga pake cara shared drive, cuma add owner trus nanti owner baru remove yg akun organization, itu gabakal bisa remove.

hence, pake perantara shared drive.

Use Shared Drives to transfer ownership on any Drive Files from an outside domain to yours.

According to Google, “You can only transfer ownership of files to people within your work or school. When you make someone else the owner of a folder, you still own the files inside.”

Apparently, only Google has the luxury of not losing team members from time to time. For the rest of us living in the real world, we’re stuck trying to figure out how to gain control over that file or folder

Not to worry – we found a workaround.

If you’ve been working in Google Drive with individuals and struggling to transfer ownership from one person to another, here’s the trick:

Bump your ownership up a level with Shared Drive.

Shared Drive is like a sneaky little tunnel where you and your friends can pass things to each other without the burden of possession.

Here’s how to do it.

this way doesn’t take up time and space, just effort. since there is no replicating done. i suppose it just changes the value of owner and path =) only text changes

transfer ownership does not need any script! and uses no computing power =) unlike colab and manual copy paste.

**Pros:**

uses user interface, no code script

**Cons:**

- cannot move folder, takes time if many nested folders

You can either use the fourth or fifth way.

Use four if you don’t need to have full control of the original files and don’t need revision history.

Use five if you don’t plan to use the one in the previous account anymore and need revision history.

For my use case, my university’s google drive capacity per account will be limited to 2GB only from the previous unlimited capacity. Hence, I needed to migrate all my files and I prefer not to use my files again from my university account. That’s why I think method 5 fits better in my use case.

Reference(s):

- https://www.tabgeeks.com/tabgeeks-blog/how-to-transfer-ownership-between-domains-in-google-drive
- https://twitter.com/natanaelwgm/status/1454405206280605703?s=20&t=WY3EsfqP4z38dO2KBCGjAQ
- https://support.google.com/accounts/answer/6386856
- https://support.google.com/drive/answer/2494892
- https://www.googlecloudcommunity.com/gc/Workspace-Q-A/Google-Sheets-ownership-transfer/m-p/459555#M6692