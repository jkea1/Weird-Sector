import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

const LineChart = () => {
  const d3Container = useRef(null)

  useEffect(() => {
    if (d3Container.current) {
      // Sample data
      const data = [
        { date: '24.05.20', value: 100 },
        { date: '24.05.21', value: 80 },
        { date: '24.05.22', value: 150 },
        { date: '24.05.23', value: 120 },
        { date: '24.05.24', value: 160 },
      ]

      const parseTime = d3.timeParse('%y.%m.%d')
      data.forEach((d) => {
        d.date = parseTime(d.date)
      })

      const margin = { top: 80, right: 80, bottom: 80, left: 80 }
      const width = 678
      const height = 268

      d3.select(d3Container.current).select('svg').remove()

      const svg = d3
        .select(d3Container.current)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)

      const x = d3.scaleTime().range([0, width])
      const y = d3.scaleLinear().range([height, 0])

      const valueline = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.value))

      x.domain(d3.extent(data, (d) => d.date))
      y.domain([0, 200])

      svg
        .append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline)
        .attr('stroke', '#F58A91')
        .attr('stroke-width', 2)
        .attr('fill', 'none')
        .attr('transform', `translate(20,0)`)

      svg
        .selectAll('dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('r', 5)
        .attr('cx', (d) => x(d.date))
        .attr('cy', (d) => y(d.value))
        .attr('fill', '#F58A91')
        .attr('transform', `translate(20,0)`)

      // X
      svg
        .append('g')
        .attr('transform', `translate(20,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%y.%m.%d')).ticks(5))
        .call((g) => g.select('.domain').remove())
        .selectAll('text')
        .style('font-size', '12px')

      // Y
      svg
        .append('g')
        .call(
          d3
            .axisLeft(y)
            .tickValues([0, 50, 100, 150, 200])
            .tickSize(-width)
            .tickFormat((d) => `${d}`)
        )
        .call((g) => g.select('.domain').remove())
        .call((g) =>
          g
            .selectAll('.tick line')
            .attr('stroke', '#d3d3d3')
            .attr('stroke-dasharray', '2,2')
            .attr('transform', `translate(20,0)`)
        )
        .call((g) => g.selectAll('.tick text').attr('x', -10).attr('dy', 4))
        .selectAll('text')
        .style('font-size', '12px')
    }
  }, [])

  return (
    <div>
      <div ref={d3Container} />
    </div>
  )
}

export default LineChart
