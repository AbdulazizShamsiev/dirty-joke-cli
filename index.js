#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from "chalk-animation";
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import 'dotenv/config'

import puppeteer from 'puppeteer';
const passwordOfInsta = process.env.PSWD
const usernameOfInsta = process.env.USER

async function  instaMsg(target,mesaj,count){
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://instagram.com');
    await page.waitForTimeout(1000);
    await page.waitForSelector('input[name="username"]')
    await page.type('input[name="username"]', usernameOfInsta); 
    await page.type('input[name="password"]', passwordOfInsta);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

   
    const targetUsername = target; 
    try {
      await page.goto('https://instagram.com/abdulaziz.apk')
      await page.waitForXPath('//div[contains(text(), "Mesaj Gönder")]');
      const elements = await page.$x('//div[contains(text(), "Mesaj Gönder")]');
      
        if (elements.length > 0) {
          await elements[0].click();
          await page.waitForTimeout(1000);
          await page.waitForSelector('button[class="_a9-- _a9_1"]')
          await page.click('button[class="_a9-- _a9_1"]')
          //send Msg 

          await page.waitForSelector('div[role="textbox"]')
          for(let i=0; i<count; i++){
            
            await page.keyboard.type(mesaj)
            await page.keyboard.type(String.fromCharCode(13))
          }
          
        }
        return false;
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
    await browser.close();
  } catch (error) {
    console.error('Hata:', error);
  }}


let username;
let msg;
let countOfMsg;
let trollFace = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣤⣦⣤⣤⣤⣤⣤⣤⣤⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡿⠟⠉⠁⠀⠀⠀⠀⠀⠀⣀⣠⠤⠄⠒⠒⠒⠒⠒⠒⠒⠂⠀⠤⠬⠩⠉⢉⣉⣉⣉⡙⠛⠿⠿⢿⣷⣶⣦⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀⠀⣠⠴⠒⠋⣁⣠⠤⠤⠶⠒⠒⠒⠒⠒⠂⠠⠤⠄⠀⢀⣀⣀⣀⣀⣀⣀⠀⠠⠤⠤⠴⠦⢬⡉⠛⠿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡟⠁⠀⠀⠀⢀⡠⠖⠋⣀⠤⠒⣋⣡⠤⠴⠒⠒⠒⠒⠒⠲⣖⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⡤⠤⢤⣄⡀⠀⠀⠀⠀⠈⠙⠿⣶⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⠏⠀⠀⠀⠀⠔⠋⢀⡴⠚⣁⠴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠈⢉⡞⠁⠀⠀⠀⠀⠀⠉⠲⣄⠀⠀⠀⠀⠀⠹⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣿⠏⠀⠀⠀⠀⠀⠀⠠⠋⢠⠞⠁⠀⢀⣀⣤⣤⣤⣤⣤⣤⣄⡀⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠆⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⣴⣾⣿⣿⣿⣿⣿⣿⡟⠉⠛⣿⣷⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⢠⣤⣶⣶⣶⣶⣦⣤⠀⠀⠀⠀⠀⠀⠀⠘⣿⣦⠀⠀⠀
⠀⠀⠀⣠⣾⣿⣿⣶⠶⠦⠤⠀⠀⠀⢴⣶⠒⠀⣼⣿⣭⣾⣿⣿⣿⣿⣿⣷⣦⣄⡀⠉⢻⣿⣆⠀⠀⠀⠀⢀⣀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡷⠠⠤⠤⠤⣤⢤⣄⠉⠻⣷⣄⠀
⠀⣠⣾⢟⡿⠉⠀⢀⣤⣶⣶⣶⣶⣶⣤⣀⠚⠁⠀⠉⠉⠁⠀⣀⣴⡾⠀⠉⠉⠛⠿⣿⣾⠿⠃⠀⠀⠀⠀⠙⠿⣿⣿⠿⠛⠛⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠲⣌⡙⢦⡈⣿⣇
⣼⡿⠃⡾⠀⢀⣼⡿⠋⠁⠀⢰⡄⠉⠛⠻⠿⣷⣦⣤⣤⣶⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⢀⣀⡀⠀⣀⣴⣾⠿⠿⣷⣦⡄⢳⠀⢱⣸⣿
⣿⠃⠀⡇⠀⣼⡿⠁⠀⠀⢠⣿⣿⣦⣄⡀⠀⠀⠀⠉⠈⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣷⣄⡀⠀⠀⠈⠻⠿⠿⠿⠟⠀⣼⠀⠀⠉⠁⢸⡄⢸⢻⣿
⣿⡄⠀⣇⠀⢿⣇⠠⣶⣾⣿⣿⡉⠙⠛⢿⣷⣦⣄⣀⠀⠀⠀⢠⠤⠤⠤⠤⠚⢣⣿⠟⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣿⣦⣄⠀⠀⠀⠀⠀⠀⢰⣿⣆⠀⠀⢠⠞⠀⣼⣼⡿
⢻⣷⡀⢹⡀⠘⣿⡆⠀⠀⠈⣿⣧⡀⠀⠀⠀⠙⢿⣿⣿⣶⣶⣤⣀⡀⠀⠀⠀⠸⣿⣆⠐⣿⠿⠿⠷⠖⠀⠀⠀⠀⠀⣠⣿⠿⠻⠋⠓⠢⣄⡀⠀⢀⣾⣿⣿⡇⠀⣠⠤⠚⣱⣿⠃
⠀⠻⣷⣄⠙⠦⣌⡁⠀⠀⠀⠙⣿⣿⣷⣦⣄⡀⢸⣿⡀⠀⠉⠙⠛⠿⠿⣷⣶⣦⣌⣛⣀⠀⠀⠀⠀⠀⠀⠸⣷⣶⣿⠟⠁⠀⠀⠀⠀⠀⣀⣥⣶⣿⢿⣷⣿⣧⠀⠀⠀⣸⣿⠁⠀
⠀⠀⠙⢿⣷⣦⠄⠀⠀⠀⠀⠀⠈⢿⣿⡉⠛⠿⣿⣿⣿⣦⣀⣀⠀⠀⠀⠀⣿⡟⠛⠛⠻⠿⢿⣷⣶⣶⣤⣤⣴⣤⣤⣤⣤⣤⣴⣶⣾⣿⡿⠛⢹⣿⠈⢿⣿⣿⠀⠀⠀⣿⠇⠀⠀
⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠹⣿⣆⠀⢸⣿⠛⠿⣿⣿⣿⣶⣦⣼⣿⣁⠀⠀⠀⠀⠀⠀⢹⣿⠉⠉⠉⠉⢻⣿⠉⠉⠁⠀⠘⣿⡆⠀⢸⣿⣤⣾⣿⣿⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣷⡀⠀⠀⠀⠀⠀⠀⠈⢻⣷⣾⡿⠀⠀⠀⠉⠙⠛⢿⣿⣿⣿⣿⣶⣶⣶⣤⣤⣾⣿⣦⣤⣤⣤⣾⣿⣦⣤⣶⣶⣶⣿⣷⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣷⣤⡀⠀⠀⠀⠀⢠⣿⠇⠉⠙⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⣄⡀⢀⣾⠟⠀⠀⠀⠀⠀⠀⠀⣿⡏⠉⠉⠛⠛⢻⣿⡿⠿⠿⢿⣿⡿⠟⢻⣿⠏⣽⡿⣱⣿⠃⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣦⡀⠲⢄⣀⠀⠢⢄⡀⠀⠈⠛⠿⣿⣿⣦⣀⣀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⢸⣿⠁⠀⠀⣼⡿⠀⢠⣿⠏⣀⣻⣿⡿⠃⠀⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣿⣤⣀⠘⠧⣄⡀⠛⠣⢄⣀⠀⠀⠘⠛⠿⠿⣿⣿⣤⣤⣼⣿⣇⣀⣀⣀⣀⣿⣿⣀⣀⣼⣿⣧⣤⣿⣿⣿⡿⠿⠛⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣷⣦⣄⡈⠛⠢⢤⣈⠙⠒⠤⣄⣀⠀⠀⠀⠈⠉⠉⠉⠉⠙⠛⠛⠛⠛⠛⠛⠋⠉⠉⠉⠉⠁⠀⠀⠀⠀⣠⠄⠀⠀⡀⠀⠀⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣷⣦⣄⡈⠉⠒⠢⠤⣍⣙⡒⠦⢤⣄⣀⣀⣀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠚⠁⠀⠀⣸⠃⠀⠀⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⢿⣶⣤⣀⠀⠀⠉⠉⠓⠒⠲⠦⠤⣍⣉⣉⣉⡉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⣀⡴⠚⠁⠀⠀⠀⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⣰⣿⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣶⣶⣤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⡟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠛⠿⠿⣶⣶⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣴⣾⡿⠛⠁⠀⠀⠀⠀⠀`
//end of code
const sleep = (ms = 2000) => new Promise((r)=> setTimeout(r,ms));
async function welcomeScreen(){
    console.clear();
    const rainbowTitle = chalkAnimation.neon(trollFace);
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.bgRed('Welcome to insta automation tool !'))
}
async function askName(){
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Target:',
        default(){
            return 'insta username';
        },
    })
    const answer1 = await inquirer.prompt({
        name: 'msg',
        type: 'input',
        message: 'Message:',
        default(){
            return 'message';
        },
    })
    
    const answer2 = await inquirer.prompt({
        name: 'count',
        type: 'input',
        message: 'Count of message:',
        default(){
            return 'number ony';
        },
    })
    msg = answer1.msg;
    countOfMsg = answer2.count;
    username = answer.player_name
    console.log(`${username} ${msg}  ${countOfMsg}`)
    await instaMsg(username,msg,countOfMsg)
}
await welcomeScreen();
await askName();