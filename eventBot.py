import discord
from discord.ext import commands

client = commands.Bot(command_prefix = '!')
token = ''

@client.event
async def on_ready():
    print('bot ready')



@client.command()
async def ping(ctx, *, question='none?'):
    await ctx.send('Ping')
    await ctx.send(f'{question}')

@client.command(aliases=['clear'])
async def delete(ctx):
    await ctx.channel.purge()

@client.command()
async def enter(ctx, member : Discord.member):



client.run(token)