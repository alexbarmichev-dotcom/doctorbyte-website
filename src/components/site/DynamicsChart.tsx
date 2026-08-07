import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const DATA = [
  { m: 'Янв', v: 61 },
  { m: 'Мар', v: 58 },
  { m: 'Май', v: 47 },
  { m: 'Июл', v: 41 },
  { m: 'Сен', v: 36 },
  { m: 'Ноя', v: 33 },
  { m: 'Янв', v: 31 },
];

const DynamicsChart = () => (
  <figure className="w-full">
    <figcaption className="flex items-baseline justify-between border-b border-border pb-4">
      <span className="font-head text-[0.74rem] uppercase tracking-[0.2em] text-muted-foreground">
        АЛТ, Ед/л
      </span>
      <span className="text-[0.74rem] tracking-[0.1em] text-primary">−49% за год</span>
    </figcaption>

    <div className="mt-6 h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={DATA} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
          <defs>
            <linearGradient id="labgid-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.28} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="1 6" vertical={false} />
          <XAxis
            dataKey="m"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={44}
            tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
            domain={[20, 70]}
          />
          <ReferenceLine y={40} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 5" />
          <Area
            type="monotone"
            dataKey="v"
            stroke="hsl(var(--primary))"
            strokeWidth={1.5}
            fill="url(#labgid-area)"
            dot={{ r: 2.5, fill: 'hsl(var(--background))', stroke: 'hsl(var(--primary))' }}
            isAnimationActive
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    <p className="mt-5 text-[0.85rem] leading-[1.6] text-muted-foreground">
      Пунктир — верхняя граница нормы. Так выглядит показатель, за которым наблюдают, а не смотрят
      один раз.
    </p>
  </figure>
);

export default DynamicsChart;
