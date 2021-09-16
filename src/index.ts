const args: string[] = process.argv.slice(2);
const argsToObjectEntries: [string, unknown][] = Object.entries(Object.fromEntries(args.map(arg => arg.split('='))));
const filteredArgs: Record<string, any> = {};

for(let [key, value] of argsToObjectEntries)
{
  if(key.includes('--'))
  {
    key = key.replace('--', '');
    filteredArgs[key] = value;
  } else if (key.includes('-')) {
    key = key.replace('-', '');
    filteredArgs[key] = value;
  }
}

export default filteredArgs;