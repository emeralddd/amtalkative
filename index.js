const Discord = require("discord.js");	
//const config = require("./tockan.json");

var bot = new Discord.Client();	

function waitt()
{
	console.log("newmem");
}
bot.on('ready', () =>
{	  
	bot.user.setActivity("HELLO");
	console.log("Ba Tam dang online");	
})	

bot.on('message', message => 
{	  
	var msg=message.content;
	if(msg.substr(0,2) === 'bt')
	{	 
		var temp = msg.split("bt");
		var cm = temp[1];
		console.log(cm.substr(0,3));
		//console.log(message.author.id);
		if(cm.substr(0,3) === 'yes' && message.author.id===750611014185386054 )
		{
			setTimeout(waitt,20000);
			message.delete();
			let au = message.mentions.users.first();
			const channel = bot.channels.cache.find(channel => channel.name === '💬𝓜𝓪𝓲𝓷𝓒𝓱𝓪𝓽')
				  if (!channel) return;
				const embed = new Discord.MessageEmbed();;
	  				embed.setTitle('Hé lu');
	  				embed.setURL("https://discord.gg/xGDy9Bj");
	  				embed.setColor(0x00C1FF);
	  				embed.setAuthor("AIRMINE COMMUNITY");
      				embed.setDescription(`Chào mừng ${au} đã đến với Server của bọn mình nhá!` + '\n' +
	  				'Bạn hãy vào <#729742385013325855> để lấy một số role free nha!'
	  				+ '\n' + 'Chúc bạn có những thời gian vui vẻ nhất tại server!');
					embed.setFooter('Emerald');
					embed.setThumbnail(au.avatarURL());
	 				embed.setImage("https://lh3.googleusercontent.com/-szVA5iOP50g/X0p5mn1cUyI/AAAAAAAAHoM/8u2FVfMjQU0-oD1MtXDauxOP-zFGaLNWgCK8BGAsYHg/s0/2020-08-29.jpg");
				channel.send(embed);
				channel.send(`Trào bạn ${au}, mìn là bà tám chính của sv nhó`);
		} 
		else
		switch(cm)
		{
			case 'ping':
				message.channel.send('pong');
			break;
			/*case 'fr':
			{
				message.channel.send("<a:flash:749310540035260469>"+`**Ping**`);
			}
			break;
			case 'lv':
			{
				message.channel.send("<a:amclennao:749301738556620910>"+"<a:amclennao:749301738556620910>"
				+"<a:amclennao:749301738556620910>"+`**CÁC ROLE TRONG SERVER!**`+"<a:amclennao:749301738556620910>"
				+"<a:amclennao:749301738556620910>"+"<a:amclennao:749301738556620910>"+'\n');
				message.channel.send(
				 `:boom: <@&715091850389618719> - Dàn police của server`
				+ '\n' + '\n' + `:boom: <@&749567451779432509>, <@&715867939445932082>, <@&730277021338435585>, <@&715872195783426108>  - Các bot của server`
				+ '\n' + '\n' + `:boom: <@&715155091778175027> - Sáng tạo emoji`
				+ '\n' + '\n' + `:boom: <@&749511681821900820>, <@&749511682937585714>, <@&749511683264872488>, <@&749511683273261106>, <@&749538752208175125>, <@&749511680823918743> - Chat level`
				+ '\n' + '\n' + `:boom: <@&749510001470472202>, <@&749511677611081729>, <@&749511678470914058>, <@&749511679737462825>, <@&749511680593100852>, <@&749511681364721696> - Voice level`
				+ '\n' + '\n' + `:boom: <@&730629286100467732>, <@&730629284833656873>, <@&730627551927730187>, <@&730627549213753404>, <@&730627547116732507>, <@&730627545082363985>, <@&730627532839452724>, <@&730626873624625243>, <@&730627058530517103> - Info`
				+ '\n' + '\n' + `:boom: <@&729985666431057962>, <@&730022165294088192>, ... - Role Màu`
				+ '\n' + '\n' + `:boom: <@&730629848137072800>, <@&730629992362541087> - Các Ping của server`
				+ '\n' + '\n' + `:boom: <@&715092881131700267> - Thành viên AirMine `
				+ '\n' + '\n' + `:boom: <@&750650685275504641> - chưa xác minh `
				);
			}
			break;*/
			default:
			{
				message.channel.send('Không có lệnh');
			}
		}
	}		
})	
//bot.login(config.token);
bot.login(process.env.BOT_TAKEN);
